const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const post = new Schema({
    title: String,
    author: { type: Schema.Types.ObjectId, ref: 'users' },
    writed_at: { type: Date, default: Date.now },
    likes: { type: Number, default: 0 },
    dislikes: { type: Number, default: 0},
    view: { type: Number, default: 0 },
    content: String,
    board: { type: Schema.Types.ObjectId, ref: 'boards' },
});

post.statics.create = function(title, author, content, board) {
    const post = new this({
        title,
        author,
        content,
        board
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

post.statics.list = function(page, board, amount, sortType) {
    if (board == 'all'){
        switch(sortType){
            case 'writed' : 
                return this.find().sort({'writed_at' : -1}).skip((page-1) * amount).limit(parseInt(amount)).exec();
            break;
            
            case 'like' :
                return this.find().sort({'likes' : -1}).skip((page-1) * amount).limit(parseInt(amount)).exec();
                break;
        }
    } else {
        console.log(board);
        switch(sortType){
            case 'writed' : 
                return this.find({'board': board}).sort({'writed_at' : -1}).skip((page-1) * amount).limit(parseInt(amount)).exec();
            break;
            
            case 'like' :
                return this.find({'board': board}).sort({'likes' : -1}).skip((page-1) * amount).limit(parseInt(amount)).exec();
                break;
        }
    }
}

post.statics.increaseView = function(_id){
    return this.update({'_id' : _id}, {
        $inc: { 'view': 1 }
    }).exec();
}

post.statics.increaseLike = function(_id){
    return this.update({'_id' : _id}, {
        $inc: { 'likes': 1 }
    }).exec();
}

post.statics.increaseDisLike = function(_id){
    return this.update({'_id' : _id}, {
        $inc: { 'dislikes': 1 }
    }).exec();
}

post.statics.getByAuthor = function(_id){
    return this.find({'author' : _id}).exec();
}

post.statics.getByUid = function (_id){
    return this.findOne({'_id' : _id}).exec();
}

module.exports = mongoose.model('Post', post);