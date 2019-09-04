const Board = require('../../models/board');

exports.list = (req, res) => {
    const respond = (boards) => {
        res.status(200).json({
            boards
        });
    };

    const onError = (err) => {
        res.status(500).json({
            status: 'ERROR',
            message: err.message
        });
    };

    Board.list()
    .then(respond)
    .catch(onError);
}

exports.create = (req, res) => {
    const {
        title,
        ex
    } = req.body;

    const create = () => {
        return Board.create(title, ex);
    }

    const respond = (boards) => {
        res.status(200).json({
            boards
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
    .catch(onError);
}