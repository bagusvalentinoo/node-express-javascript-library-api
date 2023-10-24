const GenreBookResource = require('./genre_book.resource')

class GenreResource {
  constructor(data) {
    this.id = data.id
    this.name = data.name
    this.description = data.description
    this.icon_url = data.icon_url
    this.book_count = data.dataValues.book_count
    this.books = data.Books ? GenreBookResource.collection(data.Books) : []
  }

  static collection(dataResource) {
    return dataResource.map((data) => new GenreResource(data))
  }
}

module.exports = GenreResource