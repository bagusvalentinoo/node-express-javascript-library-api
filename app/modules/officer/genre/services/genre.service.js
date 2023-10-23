const response = require('../../../../utils/response.util')
const { orderBy } = require('../../../../utils/query.util')
const { Sequelize, Op, Genre, BookGenre } = require('../../../../models/index')

const getGenres = async (req) => {
  const query = req.query
  const sortBy = orderBy(query)
  const { search } = query
  const { limit, offset } = response.pagination(query.page, query.limit)

  const responsePayloadGenre = {
    limit: limit,
    offset: offset,
    order: sortBy,
    attributes: [
      'id',
      'name',
      'description',
      'status',
      'icon_url',
      [
        Sequelize.literal(`(
            SELECT COUNT(*)
            FROM "book_genre" AS "BookGenre"
            INNER JOIN "books" AS "Book" ON "Book"."id" = "BookGenre"."book_id"
            WHERE "BookGenre"."genre_id" = "Genre"."id"
          )`),
        'book_count'
      ]
    ]
  }

  if (search) {
    responsePayloadGenre.where = {
      [Op.or]: [
        {
          name: {
            [Op.like]: `%${search}%`
          }
        },
        {
          description: {
            [Op.like]: `%${search}%`
          }
        },
        Sequelize.where(
          Sequelize.cast(Sequelize.col('Genre.status'), 'varchar'),
          { [Op.like]: `%${search}%` }
        ),
      ]
    }
  }

  const genres = await Genre.findAndCountAll(responsePayloadGenre)

  return response.paginate(
    genres,
    query.page,
    limit,
    'genres',
    genres.rows
  )
}

const createGenre = async (req, t) => {
  const { name, description, status } = req.body
  const { user_id, file } = req

  return await Genre.create({
    name: name,
    description: description,
    status: status,
    icon_url: file ? file.publicUrl : null,
    created_at: new Date(),
    updated_at: new Date(),
    created_by: user_id,
    updated_by: user_id
  }, { transaction: t })
}

const findGenreById = async (id) => {
  const genre = await Genre.findByPk(id)

  return genre ? genre : response.throwNewError(400, 'Oops! Genre not found')
}

const updateGenre = async (req, genre, t) => {
  const { name, description, status } = req.body
  const { user_id, file } = req

  const genreUpdated = await genre.update({
    name: name || genre.name,
    description: description || genre.description,
    status: status || genre.status,
    updated_at: new Date(),
    created_by: user_id || genre.created_by,
    updated_by: user_id || genre.updated_by
  }, { transaction: t })

  if (file) {
    genreUpdated.icon_url = file.publicUrl
    await genreUpdated.save({ transaction: t })
  }

  return genreUpdated
}

const deleteGenres = async (ids, t) => {
  const genres = await Genre.findAll({
    where: {
      id: {
        [Op.in]: ids
      }
    }
  })

  if (genres.length === 0) response.throwNewError(400, 'Oops! Genres not found')

  for (const genre of genres) {
    await BookGenre.destroy({
      where: {
        genre_id: genre.id
      }
    }, { transaction: t })
  }

  return await Genre.destroy({
    where: {
      id: {
        [Op.in]: ids
      }
    }
  }, { transaction: t })
}

module.exports = {
  getGenres,
  createGenre,
  findGenreById,
  updateGenre,
  deleteGenres
}