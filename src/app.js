import './util/initEnv'
import express from 'express'
import path from 'path'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import helmet from 'helmet'
import * as Sentry from '@sentry/node'
import { debugError } from './util/debug'
import indexRoutes from './routes'
import response from './util/response'
import errorCode from './util/errorCode'

const app = express()

/**
 * Protect app from some well-known web
 * vulnerabilities by setting HTTP headers appropriately.
 * @public
 */
app.use(cors())
app.use(helmet())
app.disable('x-powered-by')
app.disable('etag')


/**
 * Define Parser
 * Json Body parser
 * @public
 */
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use(indexRoutes)

/**
 * Handle error
 * basic error handling
 * @public
 */
app.use(Sentry.Handlers.errorHandler())

app.use('*', (req, res) => response.badRequest('Route Not Found', res, errorCode.routes_notfound))

app.use((err, req, res, next) => {
  if (err && err.error && err.error.isJoi) {
    response.badRequest(err.error.message, res, err.error.name)
  } else {
    response.internalServerError(err.errors || 'Internal Server Error', res, err.message)
  }
})

process.on('unhandledRejection', err => {
  if (err.name === 'ErrorForBreakingPromise') return
  debugError(err.message)
})

export default app
