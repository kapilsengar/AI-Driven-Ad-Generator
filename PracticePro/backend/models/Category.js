const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  templates: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Template', // Reference to Template model
    },
  ],
});

module.exports = mongoose.model('Category', categorySchema);
