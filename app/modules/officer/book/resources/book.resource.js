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
    this.synopsis = data.synopsis
    this.cover_url = data.cover_url
    this.genres = data.Genres ? data.Genres.map((genre) => { return genre.name }) : []
  }

  static collection(dataResource) {
    return dataResource.map((data) => new BookResource(data))
  }
}

module.exports = BookResource