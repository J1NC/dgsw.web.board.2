const router = require('express').Router();
const controller = require('./board.controller');

router.get('/', controller.list);

module.exports = router;