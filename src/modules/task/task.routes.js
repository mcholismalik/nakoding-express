import { Router } from 'express'
import validation from 'express-joi-validation'
import * as ctg from './category.controllers'
import taskSchemas from '../../middleware/schemas/task.schemas'
import authorization from '../../middleware/authorization'

const router = Router()
const validate = validation.createValidator({ passError: true })

router.use(authorization)
router.get('/category', ctg.getCategory)
router.get('/category/:id', validate.params(taskSchemas.category.getCategoryById), ctg.getCategoryById)
router.post('/category', validate.body(taskSchemas.category.insertCategory), ctg.insertCategory)
router.put('/category', validate.body(taskSchemas.category.updateCategory), ctg.updateCategory)
router.delete('/category/:id', validate.params(taskSchemas.category.deleteCategory), ctg.deleteCategory)

export default router
