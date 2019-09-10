import Joi from '@hapi/joi'

export default {
  register: Joi.object({
    username: Joi.string().required().min(5).max(25),
    password: Joi.string().required().min(5).max(25),
    fullname: Joi.string().required().min(5).max(25)
  }),
  login: Joi.object({
    username: Joi.string().required().min(5).max(25),
    password: Joi.string().required().min(5).max(25)
  })
}
