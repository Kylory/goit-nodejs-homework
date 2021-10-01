const { Contact } = require('../../db/contactModel')

const getContactById = async (id) => {
  return await Contact.findOne({ _id: id })
}

module.exports = getContactById
