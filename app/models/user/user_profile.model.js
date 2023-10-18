const { Model, DataTypes } = require('sequelize')

module.exports = (sequelize) => {
  class UserProfile extends Model {
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

  UserProfile.init(
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
        type: DataTypes.ENUM('L', 'P'),
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
      avatar: {
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
      modelName: 'UserProfile',
      tableName: 'user_profiles',
      timestamps: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    }
  )

  return UserProfile
}