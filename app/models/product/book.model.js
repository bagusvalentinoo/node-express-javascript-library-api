const { Model, DataTypes } = require('sequelize')

module.exports = (sequelize) => {
  class Book extends Model {
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

      // BelongsToMany Relationship
      this.belongsToMany(models.Genre, {
        through: models.BookGenre,
        foreignKey: 'book_id',
        otherKey: 'genre_id'
      })
    }
  }

  Book.init(
    {
      id: {
        type: DataTypes.UUID,
        allowNull: false,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
      },
      title: {
        type: DataTypes.STRING(255),
        allowNull: false,
        unique: {
          args: true,
          msg: 'Oops! Title already exist'
        },
        validate: {
          notNull: {
            args: true,
            msg: 'Oops! Title cannot be empty'
          },
          notEmpty: {
            args: true,
            msg: 'Oops! Title cannot be empty'
          },
          len: {
            args: [1, 255],
            msg: 'Oops! Title length between 1 or 255 characters'
          }
        }
      },
      author: {
        type: DataTypes.STRING(100),
        allowNull: false,
        validate: {
          notNull: {
            args: true,
            msg: 'Oops! Author cannot be empty'
          },
          notEmpty: {
            args: true,
            msg: 'Oops! Author cannot be empty'
          }
        }
      },
      publisher: {
        type: DataTypes.STRING(100),
        allowNull: false,
        validate: {
          notNull: {
            args: true,
            msg: 'Oops! Publisher cannot be empty'
          },
          notEmpty: {
            args: true,
            msg: 'Oops! Publisher cannot be empty'
          }
        }
      },
      isbn: {
        type: DataTypes.STRING(20),
        allowNull: false,
        unique: {
          args: true,
          msg: 'Oops! ISBN already exist'
        },
        validate: {
          notNull: {
            args: true,
            msg: 'Oops! ISBN cannot be empty'
          },
          notEmpty: {
            args: true,
            msg: 'Oops! ISBN cannot be empty'
          }
        }
      },
      publication_year: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: {
            args: true,
            msg: 'Oops! Publication year cannot be empty'
          },
          notEmpty: {
            args: true,
            msg: 'Oops! Publication year cannot be empty'
          },
          isNumeric: {
            args: true,
            msg: 'Oops! Publication year is not valid'
          }
        }
      },
      publication_date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        validate: {
          notNull: {
            args: true,
            msg: 'Oops! Publication date cannot be empty'
          },
          notEmpty: {
            args: true,
            msg: 'Oops! Publication date cannot be empty'
          },
          isDate: {
            args: true,
            msg: 'Oops! Publication date is not valid'
          }
        }
      },
      number_of_pages: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: {
            args: true,
            msg: 'Oops! Number of pages cannot be empty'
          },
          notEmpty: {
            args: true,
            msg: 'Oops! Number of pages cannot be empty'
          },
          isNumeric: {
            args: true,
            msg: 'Oops! Number of pages is not valid'
          }
        }
      },
      synopsis: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notNull: {
            args: true,
            msg: 'Oops! Synopsis cannot be empty'
          },
          notEmpty: {
            args: true,
            msg: 'Oops! Synopsis cannot be empty'
          },
          len: {
            args: [10, 1500],
            msg: 'Oops! Synopsis length between 10 or 1500 characters'
          }
        }
      },
      cover_url: {
        type: DataTypes.TEXT,
        allowNull: true,
        defaultValue: null,
        validate: {
          isUrl: {
            msg: 'Oops! Cover URL must be a valid URL'
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
        allowNull: true,
        references: {
          model: 'users',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT'
      },
      updated_by: {
        type: DataTypes.UUID,
        allowNull: true,
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
      modelName: 'Book',
      tableName: 'books',
      timestamps: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    }
  )

  return Book
}