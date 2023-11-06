class BookshelfBookResource {
  constructor(data) {
    this.id = data.Book.id
    this.title = data.Book.title
    this.author = data.Book.author
    this.publisher = data.Book.publisher
    this.isbn = data.Book.isbn
    this.publication_year = data.Book.publication_year
    this.publication_date = data.Book.publication_date
    this.number_of_pages = data.Book.number_of_pages
    this.stock = data.Book.stock
    this.status = data.Book.status
    this.cover_url = data.Book.cover_url
    this.synopsis = data.Book.synopsis
    this.genres = data.Book.Genres ? data.Book.Genres.map((genre) => { return genre.name }) : []
  }

  static collection(dataResource) {
    return dataResource.map((data) => new BookshelfBookResource(data))
  }
}

module.exports = BookshelfBookResource