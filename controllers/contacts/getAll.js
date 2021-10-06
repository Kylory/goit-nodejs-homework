const { getAllContacts } = require('../../model/contacts/index')

const getAll = async (req, res, next) => {
  const { _id } = req.user
  const contacts = await getAllContacts(_id)

  res.status(200).json({ contacts })
}

module.exports = { getAll }
