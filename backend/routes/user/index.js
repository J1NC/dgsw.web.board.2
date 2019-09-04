const router = require('express').Router();
const controller = require('./user.controller');

const multer = require('multer');
const upload = multer({ dest: 'public/'});

router.post('/', upload.single('profile'), controller.create);
router.get('/check/:account', controller.duplication);

router.post('/login', controller.login);

router.get('/detail/:_id', controller.get);
router.get('/likes/:_id', controller.getLikes);
router.put('/:_id', controller.update);

module.exports = router;