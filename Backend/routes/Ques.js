const router = require('express').Router();
const Ques = require('../models/Ques');
const Result = require('../models/resultInfo');

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
  const userTotalQues = userResponse.length;
  let userRightAns = 0;
  let userWrongAns = 0;

  await Promise.all(
    userResponse.map(async (item) => {
      try {
        const ques = await Ques.findById(item._id);
        if (ques.correctAnswer == item.correctAnswer) {
          userRightAns++;
        } else {
          userWrongAns++;
        }
      } catch (err) {
        res.status(500).json(err);
      }
    })
  );
  const userScore = ((userRightAns / userTotalQues) * 100).toFixed(2);

  const result = new Result({
    rightans: userRightAns,
    wrongans: userWrongAns,
    Noofques: userTotalQues,
    score: userScore,
    userId: req.body.userId,
  });
  await result.save();

  res
    .status(200)
    .json({ userRightAns, userWrongAns, userTotalQues, userScore });
});

module.exports = router;
