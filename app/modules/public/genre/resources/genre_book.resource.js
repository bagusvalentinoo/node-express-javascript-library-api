class GenreBookResource {
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
    this.status = data.stock > 0 ? 'Available': 'Out of stock'
    this.cover_url = data.cover_url
    this.synopsis = data.synopsis
  }

  static collection(dataResource) {
    return dataResource.map((data) => new GenreBookResource(data))
  }
}

module.exports = GenreBookResource