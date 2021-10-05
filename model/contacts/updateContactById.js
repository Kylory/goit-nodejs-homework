const { Contact } = require('../../db/contactModel')

const updateContactStatusById = (id, data) => {
  return Contact.findByIdAndUpdate({ _id: id }, data, { new: true })
}

module.exports = updateContactStatusById
