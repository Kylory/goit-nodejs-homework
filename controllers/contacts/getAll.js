const { getAllContacts } = require('../../model/contacts/index')

const getAll = async (req, res, next) => {
  const contacts = await getAllContacts()

  res.status(200).json({ contacts })
}

module.exports = { getAll }
