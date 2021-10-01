const { Contact } = require('../../db/contactModel')

const removeContactById = async (id) => {
  return await Contact.findByIdAndRemove({ _id: id })
}

module.exports = removeContactById
