const mongoose = require('mongoose');

const codeSchema = new mongoose.Schema({
  code: { type: String, required: true, unique: true },
  expired: { type: Boolean, default: false },
});

const Code = mongoose.model('Code', codeSchema);

module.exports = Code;
