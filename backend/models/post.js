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
    comment_allow: Boolean,
    comment: [String],
    board: { type: Schema.Types.ObjectId, ref: 'board' },
});

post.statics.create = function(title, author, content, comment_allow) {
    const post = new this({
        title,
        author,
        content,
        comment_allow
    });

    return post.save();
}

post.statics.updateByUid = function(_id, post){
    return this.update({'_id' : _id}, {
        $set: post
    }).exec();
}

post.statics.deleteByUid = function(_id){
    return this.deleteOne({'_id' : _id}).exec();
}

post.statics.list = function(page, amount, sortType) {
    return this.find().sort({sortType : -1}).skip((page-1) * amount).limit(parseInt(amount)).exec();
}

post.statics.increaseView = function(_id){
    return this.update({'_id' : _id}, {
        $inc: { 'view': 1 }
    }).exec();
}

post.statics.increaseLike = function(_id){
    return this.update({'_id' : _id}, {
        $inc: { 'like': 1 }
    }).exec();
}

post.statics.increaseDisLike = function(_id){
    return this.update({'_id' : _id}, {
        $inc: { 'dislike': 1 }
    }).exec();
}

post.statics.getByUid = function (_id){
    return this.findOne({'_id' : _id}).exec();
}
module.exports = mongoose.model('Post', post);