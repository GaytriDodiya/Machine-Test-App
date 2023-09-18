const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = express();
const authRoute = require('./routes/auth');
const quesRouter = require('./routes/Ques');

const port = 5000;

dotenv.config();

// Parse JSON request bodies before defining routes
app.use(express.json());

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });

app.use('/api/auth', authRoute);
app.use('/api/ques', quesRouter);

app.listen(port, () => {
  console.log(`Server is running on localhost:${port}`);
});