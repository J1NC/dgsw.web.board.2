const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema({
    account: String,
    name: String,
    password: String,
    gender: String,
    age: { type: Number, min: 1 },
    profile: String,
});

User.statics.create = function(account, name, password, gender, age, profile){
    const user = new this({
        account,
        name,
        password,
        gender,
        age,
        profile
    });

    return user.save();
}

User.statics.findByAccount = function(account){
    return this.findOne({'account' : account}).exec();
}

User.statics.getByUid = function(_id){
    return this.findOne({'_id': _id}).exec();
}
module.exports = mongoose.model('User', User);