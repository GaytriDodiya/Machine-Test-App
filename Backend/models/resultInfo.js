const mongoose = require('mongoose');

const resultSchema = new mongoose.Schema({
  rightans: { type: Number },
  wrongans: { type: Number },
  Noofques: { type: Number },
  score: { type: Number },
  userId: { type: String, required: true },
});

const Result = mongoose.model('Result', resultSchema);

module.exports = Result;
