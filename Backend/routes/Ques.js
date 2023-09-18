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

router.post('/result', async (req, res) => {
  const userResponse = req.body.response;
  const Noofques = userResponse.length;
  let rightans = 0;
  let wrongans = 0;

  // Use Promise.all to wait for all asynchronous operations to complete
  await Promise.all(
    userResponse.map(async (item) => {
      try {
        const ques = await Ques.findById(item._id);
        if (ques.correctAnswer == item.correctAnswer) {
          rightans++;
        } else {
          wrongans++;
        }
      } catch (error) {
        console.error('Error fetching question:', error);
        wrongans++; // Treat errors as wrong answers
      }
    })
  );

  // Send the results as an object
  res.status(200).json({ rightans, wrongans, Noofques });
});

module.exports = router;
