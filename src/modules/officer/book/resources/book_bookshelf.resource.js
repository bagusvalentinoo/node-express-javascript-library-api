class BookBookshelfResource {
  constructor(data) {
    this.id = data.id
    this.bookshelf_name = data.Bookshelf.name
    this.bookshelf_code = data.Bookshelf.code
    this.row = data.row
    this.column = data.column
  }

  static collection(dataResource) {
    return dataResource.map((data) => new BookBookshelfResource(data))
  }
}

module.exports = BookBookshelfResource