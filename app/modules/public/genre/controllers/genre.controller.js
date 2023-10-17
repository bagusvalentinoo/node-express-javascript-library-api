const response = require('../../../../utils/response.util')
const GenreService = require('../services/genre.service')
const GenreResource = require('../resources/genre.resource')

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

const show = async (req, res) => {
  try {
    const { genre, another_genres } = await GenreService.findGenreById(req.params.param)

    return response.success(
      res,
      200,
      'Data Successfully Loaded',
      {
        genre: new GenreResource(genre),
        another_genres: another_genres
      }
    )
  } catch (error) {
    return response.failed(res, error.status_code ?? 500, error)
  }
}

module.exports = {
  index,
  show
}