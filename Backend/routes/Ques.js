const router = require('express').Router();
const Ques = require('../models/Ques');

router.post('/upload-question', async (req, res) => {
  try {
    const newQues = new Ques({
      language: req.body.language,
      question: req.body.question,
      options: req.body.options,
      correctAnswer: req.body.correctAnswer,
    });
    await newQues.save();
    res.status(200).json(newQues);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/show-questions', async (req, res) => {
  try {
    const Questions = await Ques.find();
    res.send(Questions);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
