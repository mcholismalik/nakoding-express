import { Router } from 'express'
import validation from 'express-joi-validation'
import { register, login } from './auth.controllers'
import authSchemas from '../../middleware/schemas/auth.schemas'

const router = Router()
const validate = validation.createValidator({ passError: true })
router.post('/register', validate.body(authSchemas.register), register)
router.post('/login', validate.body(authSchemas.login), login)

export default router
