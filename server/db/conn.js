require('dotenv').config();
const mongoose = require('mongoose');
const mongoConfig = require('../config');

async function dbConnect() {
  const { uri } = mongoConfig;
  // db connect
  mongoose
    .connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log('Successfully connected to Atlas!');
    })
    .catch((error) => {
      console.log('Unable to connect to MongoDB Atlas');
      console.error(error);
    });
}

module.exports = dbConnect;
