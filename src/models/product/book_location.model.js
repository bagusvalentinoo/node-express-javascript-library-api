const { Model, DataTypes } = require('sequelize')

module.exports = (sequelize) => {
  class BookLocation extends Model {
    static associate(models) {
      // BelongsTo Relationships
      this.belongsTo(models.User, {
        foreignKey: 'created_by',
        as: 'createdBy'
      })

      this.belongsTo(models.User, {
        foreignKey: 'updated_by',
        as: 'updatedBy'
      })

      this.belongsTo(models.Book, {
        foreignKey: 'book_id'
      })

      this.belongsTo(models.Bookshelf, {
        foreignKey: 'bookshelf_id'
      })
    }
  }

  BookLocation.init(
    {
      id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
      },
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
      bookshelf_id: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: 'bookshelves',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT'
      },
      row: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: {
            msg: 'Oops! Row cannot be empty'
          },
          notEmpty: {
            msg: 'Oops! Row cannot be empty'
          },
          isInt: {
            msg: 'Oops! Row must be a number'
          }
        }
      },
      column: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: {
            msg: 'Oops! Column cannot be empty'
          },
          notEmpty: {
            msg: 'Oops! Column cannot be empty'
          },
          isInt: {
            msg: 'Oops! Column must be a number'
          }
        }
      },
      created_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
      },
      updated_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
      },
      created_by: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: 'users',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT'
      },
      updated_by: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: 'users',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT'
      }
    },
    {
      sequelize,
      modelName: 'BookLocation',
      tableName: 'book_locations',
      timestamps: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    }
  )

  return BookLocation
}