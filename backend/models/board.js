const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const board = new Schema({
    title: String,
    explanation: String,
});

module.exports = mongoose.model('Board', board);