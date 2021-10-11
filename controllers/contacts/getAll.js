const { getAllContacts } = require('../../model/contacts/index')

const getAll = async (req, res) => {
  const { _id } = req.user
  const { page, limit } = req.query
  const contacts = await getAllContacts(_id, page, limit)

  res.status(200).json({ contacts })
}

module.exports = { getAll }
