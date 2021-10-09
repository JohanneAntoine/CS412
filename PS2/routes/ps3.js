var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('ps3', { intro: 'Hey now' });
});

router.post('/', function (req, res, next) {
    res.render('ps3', {
        intro: req.body.intro,
        length: req.body.intro.length
    });
});

router.get('/names/:name', ((req, res, next) => {
    res.render('ps3', {name: req.params.name});

}));

module.exports = router;
