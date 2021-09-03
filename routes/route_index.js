const express = require('express');
const router = express.Router();
const apiRoutes = require('./api')

router.use('/api', apiRoutes);
console.log('api routes', apiRoutes)
module.exports = router;