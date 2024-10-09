const mongoose = require('mongoose');

const GeneratedNewsletterSchema = new mongoose.Schema({
  template: { type: mongoose.Schema.Types.ObjectId, ref: 'Template' },
  content: { type: String, required: true }, // Generated content
  dateCreated: { type: Date, default: Date.now }
});

module.exports = mongoose.model('GeneratedNewsletter', GeneratedNewsletterSchema);
