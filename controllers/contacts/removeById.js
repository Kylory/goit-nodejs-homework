const { removeContactById } = require('../../model/contacts/index')
const { NotFound } = require('http-errors')

const removeById = async (req, res, next) => {
  const id = req.params.contactId
  const result = await removeContactById(id)

  if (!result.deletedCount) {
    throw new NotFound(`Contact with id ${id} not found`)
  }

  res.json({ message: 'Contact removed' })
}

module.exports = { removeById }
