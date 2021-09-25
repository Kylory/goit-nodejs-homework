const express = require('express')
const router = express.Router()
const { controllerWrapper } = require('../../middlewares/index')
const {
  getAll,
  getById,
  add,
  updateById,
  removeById,
} = require('../../controllers/contacts')

router.get('/', controllerWrapper(getAll))

router.get('/:contactId', controllerWrapper(getById))

router.post('/', controllerWrapper(add))

router.delete('/:contactId', controllerWrapper(removeById))

router.put('/:contactId', controllerWrapper(updateById))

module.exports = router
