const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = express();
const authRoute = require('./routes/auth');
const quesRouter = require('./routes/Ques');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swagger');
const port = 5000;

dotenv.config();

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
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(port, () => {
  console.log(`Server is running on localhost:${port}`);
});
