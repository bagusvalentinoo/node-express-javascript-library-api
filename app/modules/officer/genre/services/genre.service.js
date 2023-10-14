const response = require('../../../../utils/response.util')
const { orderBy } = require('../../../../utils/query.util')
const { convertToPublicStorageUrl } = require('../../../../utils/string.util')
const { Op, Genre } = require('../../../../models/index')

const getGenres = async (req) => {
  const sortBy = orderBy(req.query)
  const { search } = req.query
  const { limit, offset } = response.pagination(req.query.page, req.query.limit)

  const responsePayloadGenre = {
    limit: limit,
    offset: offset,
    order: sortBy,
    attributes: {
      exclude: ['created_at', 'updated_at', 'created_by', 'updated_by']
    }
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
  return await Genre.create({
    name: req.body.name,
    description: req.body.description,
    status: req.body.status,
    icon_url: req.file.publicUrl ?? null,
    created_at: new Date(),
    updated_at: new Date(),
    created_by: req.user_id,
    updated_by: req.user_id
  }, { transaction: t })
}

const findGenreById = async (id) => {
  const genre = await Genre.findByPk(id)

  if (!genre) response.throwNewError(400, 'Oops! Genre not found')

  return genre
}

const updateGenre = async (req, genre, t) => {
  const genreUpdated = await genre.update({
    name: req.body.name,
    description: req.body.description,
    status: req.body.status,
    created_at: new Date(),
    updated_at: new Date(),
    created_by: req.user_id,
    updated_by: req.user_id
  }, { transaction: t })

  if (req.file) {
    genreUpdated.icon_url = req.file.publicUrl
    await genreUpdated.save({ transaction: t })
  }

  return genreUpdated
}

const deleteGenres = async (ids, t) => {
  const deletedGenres = await Genre.destroy({
    where: {
      id: ids
    }
  }, { transaction: t })

  if (!deletedGenres) response.throwNewError(400, 'Oops! Genre not found')

  return deletedGenres
}

module.exports = {
  getGenres,
  createGenre,
  findGenreById,
  updateGenre,
  deleteGenres
}