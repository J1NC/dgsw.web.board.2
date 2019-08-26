const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const user = new Schema({
    account: String,
    name: String,
    password: String,
    gender: String,
    age: { type: Number, min: 1 },
    profile: String,
});

module.exports = mongoose.model('User', user);