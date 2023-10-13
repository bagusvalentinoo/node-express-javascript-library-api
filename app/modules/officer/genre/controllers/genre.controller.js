const response = require('../../../../utils/response.util')
const GenreService = require('../services/genre.service')
const GenreResource = require('../resources/genre.resource')
const { sequelize } = require('../../../../models/index')

const index = async (req, res) => {
  try {
    const genres = await GenreService.getGenres(req)

    return response.success(
      res,
      200,
      'Data Successfully Loaded',
      genres
    )
  } catch (error) {
    return response.failed(res, error.status_code ?? 500, error)
  }
}

const store = async (req, res) => {
  const t = await sequelize.transaction()
  try {
    const genre = await GenreService.createGenre(req, t)
    await t.commit()

    return response.success(
      res,
      200,
      'Data Successfully Created',
      new GenreResource(genre),
      'genre'
    )
  } catch (error) {
    return response.failed(res, error.status_code ?? 500, error)
  }
}

const show = async (req, res) => {
  try {
    const genre = await GenreService.findGenreById(req.params.param)

    return response.success(
      res,
      200,
      'Data Successfully Loaded',
      new GenreResource(genre),
      'genre'
    )
  } catch (error) {
    return response.failed(res, error.status_code ?? 500, error)
  }
}

const update = async (req, res) => {
  const t = await sequelize.transaction()
  try {
    let genre = await GenreService.findGenreById(req.params.param)
    genre = await GenreService.updateGenre(req, genre, t)
    await t.commit()

    return response.success(
      res,
      200,
      'Data Successfully Updated',
      new GenreResource(genre),
      'genre'
    )
  } catch (error) {
    if (t) await t.rollback()
    return response.failed(res, error.status_code ?? 500, error)
  }
}

const destroy = async (req, res) => {
  try {
    await GenreService.deleteGenres(req.body.ids)

    return response.success(
      res,
      200,
      'Data Successfully Deleted'
    )
  } catch (error) {
    return response.failed(res, error.status_code ?? 500, error)
  }
}

module.exports = {
  index,
  store,
  show,
  update,
  destroy
}