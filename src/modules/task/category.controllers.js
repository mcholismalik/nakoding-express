import { Category } from '../../models'
import response from '../../util/response'

const getCategory = async (req, res, next) => {
  try {
    const { user_id } = req.user
    const data = await Category.findAll({
      where: { user_id }
    })
    return response.success('Get category success', res, data)
  } catch (err) {
    next(err)
  }
}

const getCategoryById = async (req, res, next) => {
  try {
    const { user_id } = req.user
    const { id } = req.params
    const data = await Category.findOne({
      where: { user_id, id }
    })
    return response.success('Get category by id success', res, data)
  } catch (err) {
    next(err)
  }
}

const insertCategory = async (req, res, next) => {
  try {
    const { user_id } = req.user
    const dataIns = { ...req.body, user_id }
    const data = await Category.create(dataIns)
    return response.success('Insert category success', res, data)
  } catch (err) {
    next(err)
  }
}

const updateCategory = async (req, res, next) => {
  try {
    const { id, ...dataUpd } = req.body
    const { user_id } = req.user
    const data = await Category.update(dataUpd, {
      where: { user_id, id },
      returning: true
    })
    return response.success('Update category success', res, data[1])
  } catch (err) {
    next(err)
  }
}

const deleteCategory = async (req, res, next) => {
  try {
    const { user_id } = req.user
    const { id } = req.params
    const data = await Category.destroy({
      where: { user_id, id }
    })
    return response.success('Update category success', res, data)
  } catch (err) {
    next(err)
  }
}

export {
  getCategory, getCategoryById, insertCategory, updateCategory, deleteCategory
}
