const mongoose = require('mongoose');

const templateSchema = new mongoose.Schema({
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true },
  templateName: { type: String, required: true },
  templateStructure: { type: String, required: true }
});

module.exports = mongoose.model('Template', templateSchema);
