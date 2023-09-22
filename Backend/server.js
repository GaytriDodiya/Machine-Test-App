const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = express();
const authRoute = require('./routes/auth');
const quesRouter = require('./routes/Ques');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swagger');
const Path = require('path');
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



// const __dirname = Path.resolve();
app.use(express.static(Path.join(__dirname, '/candidate-test-app/build')));
app.get('*', (req, res) =>
  res.sendFile(Path.join(__dirname, '/candidate-test-app/build/index.html'))
);


app.listen(port, () => {
  console.log(`Server is running on localhost:${port}`);
});