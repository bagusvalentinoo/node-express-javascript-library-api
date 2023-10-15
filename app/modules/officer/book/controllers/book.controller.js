const response = require('../../../../utils/response.util')
const BookResource = require('../resources/book.resource')
const BookService = require('../services/book.service')
const { sequelize } = require('../../../../models/index')

const index = async (req, res) => {
  try {
    const books = await BookService.getBooks(req)

    return response.success(
      res,
      200,
      'Data Successfully Loaded',
      books
    )
  } catch (error) {
    return response.failed(res, error.status_code ?? 500, error)
  }
}

const store = async (req, res) => {
  const t = await sequelize.transaction()
  try {
    const bookCreated = await BookService.createBook(req, t)
    await t.commit()
    const book = await BookService.findBookById(bookCreated.id)

    return response.success(
      res,
      201,
      'Data Successfully Created',
      new BookResource(book),
      'book'
    )
  } catch (error) {
    if (t) await t.rollback()
    return response.failed(res, error.status_code ?? 500, error)
  }
}

const show = async (req, res) => {
  try {
    const book = await BookService.findBookById(req.params.param)

    return response.success(
      res,
      200,
      'Data Successfully Loaded',
      new BookResource(book),
      'book'
    )
  } catch (error) {
    return response.failed(res, error.status_code ?? 500, error)
  }
}

const update = async (req, res) => {
  const t = await sequelize.transaction()
  try {
    const findBook = await BookService.findBookById(req.params.param)
    const bookUpdated = await BookService.updateBook(req, findBook, t)
    await t.commit()
    const book = await BookService.findBookById(bookUpdated.id)

    return response.success(
      res,
      200,
      'Data Successfully Updated',
      new BookResource(book),
      'book'
    )
  } catch (error) {
    if (t) await t.rollback()
    return response.failed(res, error.status_code ?? 500, error)
  }
}

const destroy = async (req, res) => {
  const t = await sequelize.transaction()
  try {
    await BookService.deleteBooks(req.body.ids, t)

    return response.success(
      res,
      200,
      'Data Successfully Deleted'
    )
  } catch (error) {
    if (t) await t.rollback()
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