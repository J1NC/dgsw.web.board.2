const router = require('express').Router();
const post = require('./post');
const user = require('./user');
const board = require('./board');

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' });
});

router.use('/post', post);
router.use('/user', user);
router.use('/board', board);

module.exports = router;
