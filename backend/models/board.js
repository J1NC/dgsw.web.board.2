const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const board = new Schema({
    title: String,
    explanation: String,
});

board.statics.list = function() {
    return this.find().exec();
}

board.statics.create = function(title, ex) {
    const board = new this({
        title,
        ex
    });

    return board.save();
}
module.exports = mongoose.model('Board', board);