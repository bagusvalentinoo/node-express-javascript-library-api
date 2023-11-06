const { Model, DataTypes } = require('sequelize')

module.exports = (sequelize) => {
  class Bookshelf extends Model {
    static associate(models) {
      // HasMany Relationships
      this.hasMany(models.BookLocation, {
        foreignKey: 'bookshelf_id'
      })

      // BelongsTo Relationships
      this.belongsTo(models.User, {
        foreignKey: 'created_by',
        as: 'createdBy'
      })

      this.belongsTo(models.User, {
        foreignKey: 'updated_by',
        as: 'updatedBy'
      })
    }
  }

  Bookshelf.init(
    {
      id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
      },
      name: {
        type: DataTypes.STRING(30),
        allowNull: false,
        validate: {
          notNull: {
            msg: 'Oops! Bookshelf name cannot be empty'
          },
          notEmpty: {
            msg: 'Oops! Bookshelf name cannot be empty'
          }
        }
      },
      code: {
        type: DataTypes.STRING(10),
        allowNull: false,
        validate: {
          notNull: {
            msg: 'Oops! Bookshelf code cannot be empty'
          },
          notEmpty: {
            msg: 'Oops! Bookshelf code cannot be empty'
          }
        }
      },
      status: {
        type: DataTypes.ENUM('ACTIVE', 'INACTIVE'),
        allowNull: false,
        defaultValue: 'ACTIVE',
        validate: {
          notNull: {
            msg: 'Oops! Bookshelf status cannot be empty'
          },
          notEmpty: {
            msg: 'Oops! Bookshelf status cannot be empty'
          },
          isIn: {
            args: [['ACTIVE', 'INACTIVE']],
            msg: 'Oops! Bookshelf status is not valid'
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
      modelName: 'Bookshelf',
      tableName: 'bookshelves',
      timestamps: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    }
  )

  return Bookshelf
}