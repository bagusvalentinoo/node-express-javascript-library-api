const BookBookshelfResource = require('./book_bookshelf.resource')

class BookResource {
  constructor(data) {
    this.id = data.id
    this.title = data.title
    this.author = data.author
    this.publisher = data.publisher
    this.isbn = data.isbn
    this.publication_year = data.publication_year
    this.publication_date = data.publication_date
    this.number_of_pages = data.number_of_pages
    this.stock = data.stock
    this.status = data.status
    this.cover_url = data.cover_url
    this.synopsis = data.synopsis
    this.genres = data.Genres ? data.Genres.map((genre) => { return genre.name }) : []
    this.book_locations = data.BookLocations ? BookBookshelfResource.collection(data.BookLocations) : []
  }
}

module.exports = BookResource