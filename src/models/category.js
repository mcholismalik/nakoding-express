import { Model, DataTypes } from 'sequelize'
import { Connection } from '../util/database'

export class Category extends Model { }

Category.init(
  {
    category: {
      type: DataTypes.STRING(25),
      allowNull: false,
      unique: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    color: {
      type: DataTypes.STRING(10),
      allowNull: false
    }
  },
  {
    tableName: 'category',
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    sequelize: Connection,
    timestamps: true,
    underscored: true
  }
)
