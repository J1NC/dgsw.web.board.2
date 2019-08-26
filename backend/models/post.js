const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const post = new Schema({
    title: String,
    author: { type: Schema.Types.ObjectId, ref: 'user' },
    writed_at: { type: Date, default: Date.now },
    likes: { type: Number, default: 0 },
    dislikes: { type: Number, default: 0},
    view: { type: Number, default: 0 },
    content: String,
    comemnt_allow: Boolean,
    comment: [String],
    board: { type: Schema.Types.ObjectId, ref: 'board' },
});

module.exports = mongoose.model('Post', post);