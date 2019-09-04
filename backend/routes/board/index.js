const router = require('express').Router();
const controller = require('./board.controller');

router.get('/', controller.list);
router.post('/', controller.create);
module.exports = router;