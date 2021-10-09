var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express', name: 'Perry', course: 'CS412' });
// });

router.route('/pass')
    .get((req, res, next) => {
      res.send('Got something in the GET');
    })
    .post((req, res, next) => {
        res.render('index', {name: req.body.firstName});
    })
    .put((req, res, next) => {

    });

router.get('/names/:fname/:lname', ((req, res, next) => {
  res.send(`Received: ${req.params.fname} ${req.params.lname}`);

}));

module.exports = router;
