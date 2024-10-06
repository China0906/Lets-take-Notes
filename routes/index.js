const router = require('express').Router();
const api = require('./api.js');
const html = require('./html.js');

router.use('/api', api);
router.use('/', html);

module.exports = router;