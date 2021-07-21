const express   = require("express");
const mongoose  = require('mongoose');
require('dotenv').config({ path: `${__dirname}/../config.env` }) 


const app   = express();
const PORT  = process.env.PORT || 8080;
const DB    = process.env.DATABASE;

mongoose.connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true
}).then( _ => console.log("DB connected successfully"));

app.listen(PORT, () => {
    console.log(`app listening on PORT ${PORT}`);
});

module.exports = app;