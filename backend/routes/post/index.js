const router = require('express').Router();
const controller = require('./post.controller');

router.get('/:page', controller.list);
router.post('/', controller.create);
router.put('/:_id', controller.update);
router.delete('/:_id', controller.delete);
router.get('/detail/:_id', controller.get);

router.get('/like/:_id', controller.like);
router.get('/dislike/:_id', controller.dislike);

module.exports = router;