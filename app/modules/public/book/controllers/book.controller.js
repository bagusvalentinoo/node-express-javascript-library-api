const response = require('../../../../utils/response.util')
const BookResource = require('../resources/book.resource')
const BookService = require('../services/book.service')

const index = async (req, res) => {
  try {
    const genres = await BookService.getBooks(req)

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
    const { book, anotherBooks } = await BookService.findBookById(req.params.param)

    return response.success(
      res,
      200,
      'Data Successfully Loaded',
      {
        book: new BookResource(book),
        another_books: BookResource.collection(anotherBooks)
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