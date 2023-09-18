const router = require('express').Router();
const Ques = require('../models/Ques');

router.get('/karan', (req, res) => {
  res.send('karan login');
});

module.exports = router;
