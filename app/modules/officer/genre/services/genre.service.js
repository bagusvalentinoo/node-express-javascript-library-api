const response = require('../../../../utils/response.util')
const { orderBy } = require('../../../../utils/query.util')
const { Sequelize, Op, Genre, BookGenre } = require('../../../../models/index')

const getGenres = async (req) => {
  const sortBy = orderBy(req.query)
  const { search } = req.query
  const { limit, offset } = response.pagination(req.query.page, req.query.limit)

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
        {
          status: search
        }
      ]
    }
  }

  const genres = await Genre.findAndCountAll(responsePayloadGenre)

  return response.paginate(
    genres,
    req.query.page,
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
    icon_url: file.publicUrl ?? null,
    created_at: new Date(),
    updated_at: new Date(),
    created_by: user_id,
    updated_by: user_id
  }, { transaction: t })
}

const findGenreById = async (id) => {
  const genre = await Genre.findByPk(id)

  if (!genre) response.throwNewError(400, 'Oops! Genre not found')

  return genre
}

const updateGenre = async (req, genre, t) => {
  const { name, description, status } = req.body
  const { user_id, file } = req

  const genreUpdated = await genre.update({
    name: name,
    description: description,
    status: status,
    created_at: new Date(),
    updated_at: new Date(),
    created_by: user_id,
    updated_by: user_id
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