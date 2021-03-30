const {Router} = require('express');
const router = Router();

router.use('/todo', require('./todo'));

module.exports = router;