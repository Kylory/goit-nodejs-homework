const { Contact } = require('../../db/contactModel')

const updateContactStatus = (id, data) => {
  return Contact.findByIdAndUpdate({ _id: id }, data, { new: true })
}

module.exports = updateContactStatus
