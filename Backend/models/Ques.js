const mongoose = require('mongoose');

const quesSchema = new mongoose.Schema(
  {
    language: { type: String, required: true },
    question: { type: String, required: true },
    options: { type: Array, required: true },
    answer: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Ques = mongoose.model('Ques', quesSchema);

module.exports = Ques;
