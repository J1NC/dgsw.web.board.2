const Post = require('../../models/post');

exports.list = (req, res) => {
    const page = req.params.page;
    const amount = req.query.amount;
    const sort = req.query.sort;

    const onError = (err) => {
        res.status(500).json({
            status: 'ERROR',
            message: err.message
        });
    };

    const respond = (posts) => {
        res.status(200).json({
            posts
        });
    };

    Post.list(page, amount, sort)
    .then(respond)
    .catch(onError);
}

exports.create = (req, res) => {
    const {
        title,
        author,
        content,
        comment_allow
    } = req.body;

    const create = () => {
        return Post.create(title, author, content, comment_allow);
    };

    const respond = (post) => {
        res.status(200).json({
            post
        });
    };

    const onError = (err) => {
        res.status(500).json({
            status: 'ERROR',
            message: err.message
        });
    };

    create()
    .then(respond)
    .catch(onError)
}

exports.update = (req, res) => {
    const post = req.body;
    const _id = req.params._id;

    const respond = (post) => {
        res.status(200).json({
            post
        });
    };

    const onError = (err) => {
        res.status(500).json({
            status: 'ERROR',
            message: err.message
        });
    };

    Post.update(_id, post)
    .then(respond)
    .catch(onError);
}

exports.delete = (req, res) => {
    const _id = req.params._id;

    const respond = (post) => {
        res.status(200).json({
            post
        });
    };

    const onError = (err) => {
        res.status(500).json({
            status: 'ERROR',
            message: err.message
        });
    };

    Post.delete(_id)
    .then(respond)
    .catch(onError);
}