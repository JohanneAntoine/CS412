const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function (res, req, next) {
        res.send('respond with a resource');
})

module.exports = router;
