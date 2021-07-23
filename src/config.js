const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config({ path: `${__dirname}/../config.env` });

const app = express();
const PORT = process.env.PORT || 8080;
const DB = process.env.DATABASE;

try {
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());

  mongoose
    .connect(DB, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    })
    .then(() => console.log('DB connected successfully'));
  app.listen(PORT, () => {
    console.log(`app listening on PORT ${PORT}`);
  });
} catch (error) {
  console.error(
    'The app could not connect to Database due to: ',
    error.message
  );
  process.exit(1);
}

module.exports = app;
