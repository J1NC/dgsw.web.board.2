const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const appServer = app.listen(3000);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

const mongoDest = `mongodb://localhost:27017`
mongoose.connect(mongoDest, {
    useNewUrlParser: true,
    dbName: 'admin',
})

const db = mongoose.connection
db.on('error', console.error)
db.once('open', () => {
    console.log(`MongoDB: successfully connected on ${mongoDest}`)
})

app.use('/', require('./routes'));

module.exports = app;
