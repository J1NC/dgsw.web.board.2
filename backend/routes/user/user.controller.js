const User = require('../../models/user');
const Post = require('../../models/post');

exports.create = (req, res) => {
    const {
        account,
        password,
        name,
        gender,
        age
    } = req.body;

    const profile = req.file.path;

    const create = () => {
        return User.create(account, name, password, gender, age, profile);
    };

    const respond = (user) => {
        res.status(200).json({
            user
        })
    };

    const onError = (err) => {
        res.status(500).json({
            status: 'ERROR',
            message: err.message
        });
    };

    create()
    .then(respond)
    .catch(onError);
}

exports.duplication = (req, res) => {
    const account = req.params.account;

    const respond = (user) => {
        if(!user){
            res.status(200).json({
                status: 0
            })
        } else {
            res.status(200).json({
                status: 1
            })
        }
    };

    const onError = (err) => {
        res.status(500).json({
            status: 'ERROR',
            message: err.message
        });
    };

    User.findByAccount(account)
    .then(respond)
    .catch(onError);
}

exports.login = (req, res) => {
    const {
        account,
        password
    } = req.body;

    const respond = (user) => {
        if(!user){
            res.status(200).json({
                status: 0,
                message: 'Account incorrect'
            });
        } else {
            console.log(user);
            if(user.password != password){
                res.status(200).json({
                    status: -1,
                    message: 'Password incorrect'
                });
            } else {
                res.status(200).json({
                    user
                })
            }
        }
    };

    const onError = (err) => {
        res.status(500).json({
            status: 'ERROR',
            message: err.message
        });
    };

    User.findByAccount(account)
    .then(respond)
    .catch(onError);
}

exports.get = (req, res) => {
    _id = req.params._id;

    const respond = (user) => {
        if(!user){
            res.status(200).json({
                status: 0
            })
        } else {
            res.status(200).json({
                user
            })
        }
    };

    const onError = (err) => {
        res.status(500).json({
            status: 'ERROR',
            message: err.message
        });
    };

    User.getByUid(_id)
    .then(respond)
    .catch(onError);
}

exports.getLikes = (req, res) => {
    _id = req.params._id;

    const respond = (posts) => {
        let count = 0;
        posts.forEach(element => {
            count += element.likes;
        });

        res.status(200).json({
            likes: count
        });
    };

    const onError = (err) => {
        res.status(500).json({
            status: 'ERROR',
            message: err.message
        });
    };

    Post.getByAuthor(_id)
    .then(respond)
    .catch(onError)
}

exports.update = (req, res) => {
    _id = req.params._id;
    user = req.body;

    const respond = (user) => {
        res.status(200).json({
            user
        })
    };

    const onError = (err) => {
        res.status(500).json({
            status: 'ERROR',
            message: err.message
        });
    };

    User.updateByUid(_id, user)
    .then(respond)
    .catch(onError)
}