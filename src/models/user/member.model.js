const { Model, DataTypes } = require('sequelize')

module.exports = (sequelize) => {
  class Member extends Model {
    static associate(models) {
      // BelongsTo Relationships
      this.belongsTo(models.User, {
        foreignKey: 'user_id'
      })

      this.belongsTo(models.Province, {
        foreignKey: 'province_id'
      })

      this.belongsTo(models.City, {
        foreignKey: 'city_id'
      })
    }
  }

  Member.init(
    {
      id: {
        type: DataTypes.UUID,
        allowNull: false,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
      },
      user_id: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: 'users',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT'
      },
      gender: {
        type: DataTypes.ENUM('Male', 'Female'),
        allowNull: true,
        validate: {
          isIn: {
            args: [['Male', 'Female']],
            msg: 'Oops! Gender must be either Male or Female'
          }
        }
      },
      address: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      birth_place: {
        type: DataTypes.STRING(50),
        allowNull: true
      },
      birth_date: {
        type: DataTypes.DATEONLY,
        allowNull: true
      },
      status: {
        type: DataTypes.ENUM('ACTIVE', 'INACTIVE', 'BLOCKED'),
        allowNull: false,
        defaultValue: 'ACTIVE',
        validate: {
          notEmpty: {
            msg: 'Oops! Status cannot be empty'
          },
          notNull: {
            msg: 'Oops! Status cannot be null'
          },
          isIn: {
            args: [['ACTIVE', 'INACTIVE', 'BLOCKED']],
            msg: 'Oops! Status must be either ACTIVE, INACTIVE, or BLOCKED'
          }
        }
      },
      avatar_url: {
        type: DataTypes.TEXT,
        allowNull: true,
        validate: {
          isUrl: {
            msg: 'Oops! Avatar must be a valid URL'
          }
        }
      },
      province_id: {
        type: DataTypes.UUID,
        allowNull: true,
        references: {
          model: 'location_provinces',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT'
      },
      city_id: {
        type: DataTypes.UUID,
        allowNull: true,
        references: {
          model: 'location_cities',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT'
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
      }
    },
    {
      sequelize,
      modelName: 'Member',
      tableName: 'members',
      timestamps: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    }
  )

  return Member
}