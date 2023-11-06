const BookshelfBookResource = require('./bookshelf_book.resource')

class BookshelfResource {
  constructor(data) {
    this.id = data.id
    this.name = data.name
    this.code = data.code
    this.book_count = data.dataValues.book_count
    this.books = data.BookLocations ? BookshelfBookResource.collection(data.BookLocations) : []
  }

  static collection(dataResource) {
    return dataResource.map((data) => new BookshelfResource(data))
  }
}

module.exports = BookshelfResource