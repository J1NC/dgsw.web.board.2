const router = require('express').Router();
const post = require('./post');
const user = require('./user');

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' });
});

router.use('/post', post);
router.use('/user', user);

module.exports = router;
