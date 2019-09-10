import '../util/initEnv'
import { Sequelize } from 'sequelize'
import { SequelizeHelper } from 'sequelize-utility'
import * as dbs from '../util/database'

import { Users } from './users'
import { Category } from './category'

const dbHelper = new SequelizeHelper(dbs, Sequelize)

Users.hasMany(Category, { foreignKey: 'user_id' })
Category.belongsTo(Users, { foreignKey: 'user_id' })

// dbHelper.syncAllForce()

export { Users, Category }
export default dbHelper // to get the db after all models been initialized
