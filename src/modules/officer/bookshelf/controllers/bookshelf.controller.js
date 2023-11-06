const response = require('../../../../utils/response.util')
const BookshelfService = require('../services/bookshelf.service')
const BookshelfResource = require('../resources/bookshelf.resource')
const { sequelize } = require('../../../../models/index')

const index = async (req, res) => {
  try {
    const bookshelves = await BookshelfService.getBookshelves(req)

    return response.success(
      res,
      200,
      'Data Successfully Loaded',
      bookshelves
    )
  } catch (error) {
    return response.failed(res, error.status_code ?? 500, error)
  }
}

const create = async (req, res) => {
  const t = await sequelize.transaction()
  try {
    const bookshelfCreated = await BookshelfService.createBookshelf(req, t)
    await t.commit()
    const bookshelf = await BookshelfService.findBookshelfById(bookshelfCreated.id)

    return response.success(
      res,
      201,
      'Data Successfully Created',
      new BookshelfResource(bookshelf),
      'bookshelf'
    )
  } catch (error) {
    if (t) await t.rollback()
    return response.failed(res, error.status_code ?? 500, error)
  }
}

const show = async (req, res) => {
  try {
    const bookshelf = await BookshelfService.findBookshelfById(req.params.param)

    return response.success(
      res,
      200,
      'Data Successfully Loaded',
      new BookshelfResource(bookshelf),
      'bookshelf'
    )
  } catch (error) {
    return response.failed(res, error.status_code ?? 500, error)
  }
}

const update = async (req, res) => {
  const t = await sequelize.transaction()
  try {
    const findBookshelf = await BookshelfService.findBookshelfById(req.params.param)
    const bookshelfUpdated = await BookshelfService.updateBookshelf(req, findBookshelf, t)
    await t.commit()
    const bookshelf = await BookshelfService.findBookshelfById(bookshelfUpdated.id)

    return response.success(
      res,
      200,
      'Data Successfully Updated',
      new BookshelfResource(bookshelf),
      'bookshelf'
    )
  } catch (error) {
    if (t) await t.rollback()
    return response.failed(res, error.status_code ?? 500, error)
  }
}

const destroy = async (req, res) => {
  const t = await sequelize.transaction()
  try {
    await BookshelfService.deleteBookshelves(req.body.ids, t)

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
  create,
  show,
  update,
  destroy
}