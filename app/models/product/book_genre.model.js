const { Model, DataTypes } = require('sequelize')

module.exports = (sequelize) => {
  class BookGenre extends Model { }

  BookGenre.init(
    {
      book_id: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: 'books',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT'
      },
      genre_id: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: 'genres',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT'
      }
    },
    {
      sequelize,
      modelName: 'BookGenre',
      tableName: 'book_genre',
      timestamps: false
    }
  )

  return BookGenre
}