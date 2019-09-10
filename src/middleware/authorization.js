import Jwt from 'jsonwebtoken'
import response from '../util/response'
import errorCode from '../util/errorCode'

export default async (req, res, next) => {
  let token = req.body.token || req.headers.authorization || req.cookies['x-access-token']
  if (!token) return response.unAuthorized('Token not found', res, errorCode.unAuthorized)
  try {
    token = token.replace('Bearer ', '')
    const decoded = await Jwt.verify(token, process.env.JWT_PRIVATE_KEY)
    req.user = decoded
    next()
  } catch (err) {
    return response.unAuthorized('Token invalid', res, errorCode.unAuthorized)
  }
}
