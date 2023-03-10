require('dotenv').config();
const express = require('express');
const cors = require('cors');
const sequelize = require('./db');
const models = require('./models/models');
const router = require('./routes/index');

const PORT = process.env.PORT || 3000;

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', router)

/* 
app.get('/', (req, res) => {
  res.status(200).json({ message: 'It is working!!!!' });
});
 */
const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
  } catch (e) {
    console.log(e);
  }
};
start();
