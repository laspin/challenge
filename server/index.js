require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const pino = require('express-pino-logger')();

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(pino);

app.use(cors());

app.use(bodyParser.json());

// db connection
const dbConnect = require('./db/conn');
dbConnect();

// routes
const router = require('./routes');

app.use('/api', router);

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log('Express server running at port 8080');
});
