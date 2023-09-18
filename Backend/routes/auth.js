const router = require('express').Router(); // Note the () at the end
const User = require('../models/User');
const Code = require('../models/Code');
const otpGenerator = require('otp-generator');

router.get('/login', (req, res) => {
  res.send('login page and logout');
});

router.post('/register', async (req, res) => {
  const { username, email, isAdmin } = req.body;
  try {
    const newUser = new User({ username, email, isAdmin });
    await newUser.save();
    res.status(200).json(newUser._id);
  } catch (error) {
    res.status(500).json({ error: 'Registration failed' });
  }
});

router.get('/generate-code/:id', async (req, res) => {
  const Admin = await User.findById(req.params.id);
  if (Admin.isAdmin) {
    try {
      const otp = otpGenerator.generate(4, {
        upperCase: false,
        specialChars: false,
      });
      const newCode = new Code({ code: otp });
      await newCode.save();
      res.status(200).json(newCode);
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json('you are not admin');
  }
});

router.post('/login', async (req, res) => {
  const UserCode = await Code.findOne({ code: req.body.code });
  if (UserCode) {
    try {
      await Code.deleteOne(UserCode);
      const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        language: req.body.language,
        contact: req.body.contact,
      });
      await newUser.save();
      res.status(200).json(newUser);
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json('wrong code');
  }
});

module.exports = router;
