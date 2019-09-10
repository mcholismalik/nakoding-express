import Joi from '@hapi/joi'

export default {
  category: {
    getCategoryById: Joi.object({
      id: Joi.number().required().min(1)
    }),
    insertCategory: Joi.object({
      category: Joi.string().required().min(3).max(25),
      color: Joi.string().required().min(1).max(10)
    }),
    updateCategory: Joi.object({
      id: Joi.number().required().min(1),
      category: Joi.string().required().min(3).max(25),
      color: Joi.string().required().min(1).max(10)
    }),
    deleteCategory: Joi.object({
      id: Joi.number().required().min(1)
    })
  }
}
