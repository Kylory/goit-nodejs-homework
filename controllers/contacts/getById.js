const { getContactById } = require('../../model/contacts/index')
const { NotFound } = require('http-errors')

const getById = async (req, res, next) => {
  const id = req.params.contactId
  const contact = await getContactById(id)

  if (contact.length === 0) {
    throw new NotFound(`Contact with id ${id} not found`)
  }

  res.json(contact)
}

module.exports = { getById }
