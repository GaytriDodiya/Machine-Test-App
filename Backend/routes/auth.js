const router = require('express').Router(); // Note the () at the end
const User = require('../models/User');
const Code = require('../models/Code');
const bcrypt = require('bcrypt');
const otpGenerator = require('otp-generator');

/**
 * @swagger
 * /api/register:
 *   post:
 *     summary: Register admin user
 *     description: Register an admin user in the database who can generate a code.
 *     tags:
 *       - Admin
 *     parameters:
 *       - in: body
 *         name: user
 *         description: User object to be registered
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             password:
 *               type: string
 *             email:
 *               type: string
 *             isAdmin:
 *               type: string
 *     responses:
 *       200:
 *         description: User registration successful
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 password:
 *                   type: string
 *                 email:
 *                   type: string
 *                 isAdmin:
 *                   type: boolean
 */

router.post('/register', async (req, res) => {
  const { password, email, isAdmin } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({ password: hashedPassword, email, isAdmin });
    await newUser.save();
    res.status(200).json(newUser._id);
  } catch (error) {
    res.status(500).json({ error: 'Registration failed' });
  }
});

/**
 * @swagger
 * /api/admin-login:
 *   post:
 *     summary: admin login api
 *     description: admin can easily login if register successfully.
 *     responses:
 *       200:
 *         description: user login successfull
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               items:
 *                 type: object
 *                 properties:
 *                   password:
 *                     type: string
 *                   email:
 *                     type: string
 *                   isAdmin:
 *                     type: Boolean
 */

router.post('/admin-login', async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });

    if (!user) {
      res.status(404).json('user not found');
    } else {
      const validPassword = await bcrypt.compare(
        req.body.password,
        user.password
      );

      if (validPassword) {
        res.status(200).json(user);
      } else {
        res.status(404).json('wrong password');
      }
    }
  } catch (err) {
    res.status(500).json(err);
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
      const meassage = 'code generated successfully';
      res.status(200).json({ newCode, meassage });
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json('you are not admin');
  }
});

router.post('/login', async (req, res) => {
  const UserCode = await Code.findOne({ code: req.body.code });
  if (UserCode && UserCode.expired == false) {
    try {
      // await Code.deleteOne(UserCode);
      UserCode.expired = true;
      await UserCode.save();

      const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        language: req.body.language,
        contact: req.body.contact,
      });
      await newUser.save();
      const meassage = 'user registered successfully';
      res.status(200).json({ newUser, meassage });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  } else {
    res.status(403).json('wrong code');
  }
});

module.exports = router;
