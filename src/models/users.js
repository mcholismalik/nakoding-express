import { Model, DataTypes } from 'sequelize'
import { Connection } from '../util/database'

export class Users extends Model { }

Users.init(
  {
    username: {
      type: DataTypes.STRING(25),
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    fullname: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    is_active: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    }
  },
  {
    tableName: 'users',
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    sequelize: Connection,
    timestamps: true,
    underscored: true
  }
)
