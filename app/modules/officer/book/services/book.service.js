const response = require('../../../../utils/response.util')
const { orderBy } = require('../../../../utils/query.util')
const BookResource = require('../resources/book.resource')
const { Sequelize, Op, Book, Genre, BookGenre } = require('../../../../models/index')

const getBooks = async (req) => {
  const sortBy = orderBy(req.query)
  const { search } = req.query
  const { limit, offset } = response.pagination(req.query.page, req.query.limit)

  const responsePayloadBook = {
    limit: limit,
    offset: offset,
    order: sortBy,
    include: {
      model: Genre,
      through: { attributes: [] },
      attributes: ['id', 'name']
    },
    distinct: true
  }

  if (search) {
    responsePayloadBook.where = {
      [Op.or]: [
        {
          title: {
            [Op.like]: `%${search}%`
          }
        },
        {
          author: {
            [Op.like]: `%${search}%`
          }
        },
        {
          publisher: {
            [Op.like]: `%${search}%`
          }
        },
        {
          isbn: {
            [Op.like]: `%${search}%`
          }
        },
        Sequelize.where(
          Sequelize.cast(Sequelize.col('Book.publication_date'), 'varchar'),
          { [Op.like]: `%${search}%` }
        ),
        Sequelize.where(
          Sequelize.cast(Sequelize.col('Book.publication_year'), 'varchar'),
          { [Op.like]: `%${search}%` }
        ),
        Sequelize.where(
          Sequelize.cast(Sequelize.col('Book.number_of_pages'), 'varchar'),
          { [Op.like]: `%${search}%` }
        )
      ]
    }
  }

  const books = await Book.findAndCountAll(responsePayloadBook)

  return response.paginate(
    books,
    req.query.page,
    limit,
    'books',
    BookResource.collection(books.rows, 1)
  )
}

const createBook = async (req, t) => {
  const {
    title,
    author,
    publisher,
    isbn,
    publication_year,
    publication_date,
    number_of_pages,
    synopsis,
    genres,
    genre_names
  } = req.body

  const book = await Book.create({
    title: title,
    author: author,
    publisher: publisher,
    isbn: isbn,
    publication_year: parseInt(publication_year),
    publication_date: publication_date,
    number_of_pages: parseInt(number_of_pages),
    synopsis: synopsis,
    cover_url: req.file.publicUrl ?? null,
    created_at: new Date(),
    updated_at: new Date(),
    created_by: req.user_id,
    updated_by: req.user_id
  }, { transaction: t })

  if (genres) await book.setGenres(genres, { transaction: t })
  if (genre_names) {
    for (const genreName of genre_names) {
      const genre = await Genre.findOrCreate({
        where: {
          name: genreName
        }
      })

      await book.addGenre(genre[0].id, { transaction: t })
    }
  }

  return book
}

const findBookById = async (id) => {
  const book = await Book.findByPk(id, {
    include: {
      model: Genre,
      through: { attributes: [] },
      attributes: ['id', 'name']
    }
  })

  return book ? book : response.throwNewError(400, 'Oops! Book not found')
}

const updateBook = async (req, book, t) => {
  const {
    title,
    author,
    publisher,
    isbn,
    publication_year,
    publication_date,
    number_of_pages,
    synopsis,
    genres,
    genre_names
  } = req.body
  const { user_id, file } = req

  const bookUpdated = await book.update({
    title: title || book.title,
    author: author || book.author,
    publisher: publisher || book.publisher,
    isbn: isbn || book.isbn,
    publication_year: parseInt(publication_year) || book.publication_year,
    publication_date: publication_date || book.publication_date,
    number_of_pages: parseInt(number_of_pages) || book.number_of_pages,
    synopsis: synopsis || book.synopsis,
    updated_at: new Date(),
    created_by: user_id || book.created_by,
    updated_by: user_id || book.updated_by
  }, { transaction: t })

  if (file) {
    bookUpdated.cover_url = file.publicUrl
    await book.save({ transaction: t })
  }

  if (genres) await bookUpdated.setGenres(genres, { transaction: t })
  if (genre_names) {
    const genreIds = []

    for (const genreName of genre_names) {
      const genre = await Genre.findOrCreate({
        where: {
          name: genreName
        }
      })

      genreIds.push(genre[0].id)
    }

    await bookUpdated.setGenres(genreIds, { transaction: t })
  }

  return bookUpdated
}

const deleteBooks = async (ids, t) => {
  const books = await Book.findAll({
    where: {
      id: {
        [Op.in]: ids
      }
    }
  })

  if (books.length === 0) response.throwNewError(400, 'Oops! Books not found')

  for (const book of books) {
    await BookGenre.destroy({
      where: {
        book_id: book.id
      }
    }, { transaction: t })
  }

  return await Book.destroy({
    where: {
      id: {
        [Op.in]: ids
      }
    }
  }, { transaction: t })
}

module.exports = {
  getBooks,
  createBook,
  findBookById,
  updateBook,
  deleteBooks
}