import bcrypt from 'bcryptjs'
import Jwt from 'jsonwebtoken'
import { Users } from '../../models'
import response from '../../util/response'
import errorCode from '../../util/errorCode'

const register = async (req, res, next) => {
  try {
    let { password } = req.body
    const salt = 10
    password = await new Promise((resolve, reject) => {
      bcrypt.hash(password, salt, (err, hash) => {
        if (err) reject(err)
        resolve(hash)
      })
    })
    const dataUser = { ...req.body, password }
    const dataRes = await Users.create(dataUser)
    return response.success('Registration success', res, dataRes)
  } catch (err) {
    next(err)
  }
}

const login = async (req, res, next) => {
  try {
    const { username, password } = req.body
    const data = await Users.findOne({ where: { username } })
    const check = await new Promise((resolve, reject) => {
      bcrypt.compare(password, data.password, (err, result) => {
        if (err) reject(err)
        resolve(result)
      })
    })
    if (!check) return response.unAuthorized('Login failed, wrong username or password', res, errorCode.unAuthorized)
    const token = await Jwt.sign({
      user_id: data.id
    }, process.env.JWT_PRIVATE_KEY, { expiresIn: '1h' })
    return response.success('Login success', res, { token })
  } catch (err) {
    next(err)
  }
}

export { register, login }
