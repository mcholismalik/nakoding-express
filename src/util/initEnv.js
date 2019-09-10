import dotEnv from 'dotenv-flow'
import { debugError, debugApp } from './debug'

const envs = {
  dev: 'development',
  prod: 'production',
  test: 'test'
}

const defaultEnv = envs.dev
if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = defaultEnv
  debugError(`No Env has been found. By default, ${defaultEnv} has been set as NODE_ENV.`)
}

dotEnv.config()
debugApp(`Environment: ${process.env.NODE_ENV}`)
