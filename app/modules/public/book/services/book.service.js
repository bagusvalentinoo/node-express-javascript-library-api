const response = require('../../../../utils/response.util')
const { orderBy } = require('../../../../utils/query.util')
const { Op, Book, Genre } = require('../../../../models/index')
const BookResource = require('../resources/book.resource')

const getBooks = async (req) => {
  const query = req.query
  const sortBy = orderBy(query)
  const { limit, offset } = response.pagination(query.page, query.limit)

  const books = await Book.findAndCountAll({
    limit: limit,
    offset: offset,
    order: sortBy,
    attributes: {
      exclude: ['created_by', 'updated_by']
    },
    include: {
      model: Genre,
      through: { attributes: [] },
      attributes: ['id', 'name']
    },
    distinct: true
  })

  return response.paginate(
    books,
    query.page,
    limit,
    'books',
    BookResource.collection(books.rows, 1)
  )
}

const findBookById = async (id) => {
  const attributes = {
    exclude: ['created_by', 'updated_by']
  }

  const include = {
    model: Genre,
    through: { attributes: [] },
    attributes: ['id', 'name']
  }

  const book = await Book.findByPk(id, {
    attributes: attributes,
    include: include
  })

  if (!book) response.throwNewError(400, 'Oops, book not found')

  const anotherBooks = await Book.findAll({
    limit: 10,
    order: [['created_at', 'DESC']],
    attributes: attributes,
    where: {
      id: {
        [Op.ne]: id
      }
    },
    include: include
  })

  return {
    book: book,
    anotherBooks: anotherBooks
  }
}

module.exports = {
  getBooks,
  findBookById
}
