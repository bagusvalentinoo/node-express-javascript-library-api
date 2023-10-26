const response = require('../../../../utils/response.util')
const { orderBy } = require('../../../../utils/query.util')
const { Sequelize, Op, Genre, Book } = require('../../../../models/index')

const getGenres = async (req) => {
  const query = req.query
  const sortBy = orderBy(query)
  const { limit, offset } = response.pagination(query.page, query.limit)

  const genres = await Genre.findAndCountAll({
    limit: limit,
    offset: offset,
    order: sortBy,
    attributes: [
      'id',
      'name',
      'description',
      'icon_url',
      [
        Sequelize.literal(`CAST((
            SELECT COUNT(*)
            FROM "book_genre" AS "BookGenre"
            INNER JOIN "books" AS "Book" ON "Book"."id" = "BookGenre"."book_id"
            WHERE "BookGenre"."genre_id" = "Genre"."id"
          ) AS INTEGER)`),
        'book_count'
      ]
    ]
  })

  return response.paginate(
    genres,
    query.page,
    limit,
    'genres',
    genres.rows
  )
}

const findGenreById = async (id) => {
  const attributes = [
    'id',
    'name',
    'description',
    'icon_url',
    [
      Sequelize.literal(`CAST((
            SELECT COUNT(*)
            FROM "book_genre" AS "BookGenre"
            INNER JOIN "books" AS "Book" ON "Book"."id" = "BookGenre"."book_id"
            WHERE "BookGenre"."genre_id" = "Genre"."id"
          ) AS INTEGER)`),
      'book_count'
    ]
  ]

  const genre = await Genre.findByPk(id, {
    attributes: attributes,
    include: {
      model: Book,
      through: { attributes: [] },
      attributes: {
        exclude: ['created_at', 'updated_at', 'created_by', 'updated_by']
      }
    }
  })

  if (!genre) response.throwNewError(400, 'Oops! Genre not found')

  const anotherGenres = await Genre.findAll({
    limit: 10,
    order: [['book_count', 'DESC']],
    attributes: attributes,
    where: {
      id: {
        [Op.ne]: id
      }
    }
  })

  return {
    genre: genre,
    another_genres: anotherGenres
  }
}

module.exports = {
  getGenres,
  findGenreById
}