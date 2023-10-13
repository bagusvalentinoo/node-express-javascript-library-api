class GenreResource {
  constructor(data) {
    this.id = data.id
    this.name = data.name
    this.description = data.description
    this.status = data.status
    this.icon_url = data.icon_url
  }

  static collection(dataResource) {
    return dataResource.map((data) => new GenreResource(data))
  }
}

module.exports = GenreResource