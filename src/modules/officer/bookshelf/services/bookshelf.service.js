const response = require('../../../../utils/response.util')
const { orderBy } = require('../../../../utils/query.util')
const { Sequelize, Op, Bookshelf, BookLocation, Book, Genre } = require('../../../../models/index')

const getBookshelves = async (req) => {
  const sortBy = orderBy(req.query)
  const { search } = req.query
  const { limit, offset } = response.pagination(req.query.page, req.query.limit)

  const responsePayloadBookshelf = {
    limit: limit,
    offset: offset,
    order: sortBy,
    distinct: true,
    attributes: [
      'id',
      'name',
      'code',
      [
        Sequelize.literal(`CAST((
            SELECT COUNT(*)
            FROM "book_locations" AS "BookLocations"
            INNER JOIN "books" AS "Book" ON "Book"."id" = "BookLocations"."book_id"
            WHERE "BookLocations"."bookshelf_id" = "Bookshelf"."id"
          ) AS INTEGER)`),
        'book_count'
      ]
    ]
  }

  if (search) {
    responsePayloadBookshelf.where = {
      [Op.or]: [
        {
          name: {
            [Op.like]: `%${search}%`
          }
        },
        {
          code: {
            [Op.like]: `%${search}%`
          }
        }
      ]
    }
  }

  const bookshelves = await Bookshelf.findAndCountAll(responsePayloadBookshelf)

  return response.paginate(
    bookshelves,
    req.query.page,
    limit,
    'bookshelves',
    bookshelves.rows
  )
}

const createBookshelf = async (req, t) => {
  const { name, code, books } = req.body

  const bookshelf = await Bookshelf.create({
    name: name,
    code: code,
    created_at: new Date(),
    updated_at: new Date(),
    created_by: req.user_id,
    updated_by: req.user_id
  }, { transaction: t })

  if (books) {
    for (const book of books) {
      const isBookExist = await Book.findByPk(book.book_id)
      if (!isBookExist) response.throwNewError(400, 'Oops! Book not found')

      await bookshelf.createBookLocation({
        book_id: book.book_id,
        row: parseInt(book.row),
        column: parseInt(book.column),
        created_at: new Date(),
        updated_at: new Date(),
        created_by: req.user_id,
        updated_by: req.user_id
      }, { transaction: t })
    }
  }

  return bookshelf
}

const findBookshelfById = async (id) => {
  const bookshelf = await Bookshelf.findByPk(id, {
    attributes: [
      'id',
      'name',
      'code',
      [
        Sequelize.literal(`CAST((
            SELECT COUNT(*)
            FROM "book_locations" AS "BookLocations"
            INNER JOIN "books" AS "Book" ON "Book"."id" = "BookLocations"."book_id"
            WHERE "BookLocations"."bookshelf_id" = "Bookshelf"."id"
          ) AS INTEGER)`),
        'book_count'
      ]
    ],
    include: {
      model: BookLocation,
      include: {
        model: Book,
        attributes: {
          exclude: ['created_at', 'updated_at']
        },
        include: {
          model: Genre,
          attributes: ['id', 'name']
        }
      }
    }
  })

  return bookshelf ? bookshelf : response.throwNewError(400, 'Oops! Bookshelf not found')
}

const updateBookshelf = async (req, bookshelf, t) => {
  const { name, code, books } = req.body

  await bookshelf.update({
    name: name || bookshelf.name,
    code: code || bookshelf.code,
    updated_at: new Date(),
    updated_by: req.user_id
  }, { transaction: t })

  if (books) {
    await BookLocation.destroy({
      where: {
        bookshelf_id: bookshelf.id
      }
    }, { transaction: t })

    for (const book of books) {
      const isBookExist = await Book.findByPk(book.book_id)
      if (!isBookExist) response.throwNewError(400, 'Oops! Book not found')

      await bookshelf.createBookLocation({
        book_id: book.book_id,
        row: parseInt(book.row),
        column: parseInt(book.column),
        created_at: new Date(),
        updated_at: new Date(),
        created_by: req.user_id,
        updated_by: req.user_id
      }, { transaction: t })
    }
  }

  return bookshelf
}

const deleteBookshelves =async (ids, t) => {
  const bookshelves = await Bookshelf.findAll({
    where: {
      id: {
        [Op.in]: ids
      }
    }
  })

  if (bookshelves.length === 0) response.throwNewError(400, 'Oops! Bookshelf not found')

  for (const bookshelf of bookshelves) {
    await BookLocation.destroy({
      where: {
        bookshelf_id: bookshelf.id
      }
    }, { transaction: t })
  }

  return await Bookshelf.destroy({
    where: {
      id: {
        [Op.in]: ids
      }
    }
  }, { transaction: t })
}

module.exports = {
  getBookshelves,
  createBookshelf,
  findBookshelfById,
  updateBookshelf,
  deleteBookshelves
}