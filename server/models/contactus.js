const mongoose = require('mongoose');
const {Schema} = mongoose
const contactSchema = Schema({
  name: { type: String, },
  email: { type: String, },
  message: { type: String }
});

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;