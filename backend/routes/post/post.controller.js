const Post = require('../../models/post');

exports.list = (req, res) => {
    const page = req.params.page;
    const board = req.params.board;
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

    Post.list(page, board, amount, sort)
    .then(respond)
    .catch(onError);
}

exports.create = (req, res) => {
    const {
        title,
        author,
        content,
        board
    } = req.body;

    const create = () => {
        return Post.create(title, author, content, board);
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

    Post.updateByUid(_id, post)
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

    Post.deleteByUid(_id)
    .then(respond)
    .catch(onError);
}

exports.get = (req, res) => {
    const _id = req.params._id;

    const getOne = (_id) => {
        Post.increaseView(_id);
        return Post.getByUid(_id);
    }

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

    getOne(_id)
    .then(respond)
    .catch(onError);
}

exports.like = (req, res) => {
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
    Post.increaseLike(_id)
    .then(respond)
    .catch(onError);
}

exports.dislike = (req, res) => {
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
    Post.increaseDisLike(_id)
    .then(respond)
    .catch(onError);
}