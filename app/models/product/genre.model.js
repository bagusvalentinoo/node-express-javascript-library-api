const { Model, DataTypes } = require('sequelize')

module.exports = (sequelize) => {
  class Genre extends Model {
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
    }
  }

  Genre.init(
    {
      id: {
        type: DataTypes.UUID,
        allowNull: false,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
      },
      name: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: {
          args: true,
          msg: 'Genre name already exists'
        },
        validate: {
          notNull: {
            args: true,
            msg: 'Genre name is required'
          },
          notEmpty: {
            args: true,
            msg: 'Genre name is required'
          }
        }
      },
      description: {
        type: DataTypes.STRING(100),
        allowNull: false,
        validate: {
          notNull: {
            args: true,
            msg: 'Genre description is required'
          },
          notEmpty: {
            args: true,
            msg: 'Genre description is required'
          },
          len: {
            args: [10, 100],
            msg: 'Genre description must be between 10 and 100 characters'
          }
        }
      },
      status: {
        type: DataTypes.ENUM('ACTIVE', 'INACTIVE'),
        allowNull: false,
        defaultValue: 'ACTIVE',
        validate: {
          notNull: {
            args: true,
            msg: 'Genre status is required'
          },
          notEmpty: {
            args: true,
            msg: 'Genre status is required'
          },
          isIn: {
            args: [['ACTIVE', 'INACTIVE']],
            msg: 'Genre status must be ACTIVE or INACTIVE'
          }
        }
      },
      icon_url: {
        type: DataTypes.TEXT,
        allowNull: true,
        validate: {
          isUrl: {
            args: true,
            msg: 'Genre icon url must be a valid url'
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
      modelName: 'Genre',
      tableName: 'genres',
      timestamps: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    }
  )

  return Genre
}