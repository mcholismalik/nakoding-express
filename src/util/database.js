import './initEnv'
import { Sequelize } from 'sequelize'
import config from 'config'

export const Connection = new Sequelize({
  username: config.get('nakoding.db.user'),
  password: process.env.DB_PASSWORD,
  database: config.get('nakoding.db.name'),
  host: config.get('nakoding.db.host'),
  dialect: config.get('nakoding.db.dialect'),
  logging: false
})
