var express = require('express');
var router = express.Router();
const ctrlMain= require('../controllers/main');

/* GET home page. */


/*const homepageController = (req, res) => {
  res.render('index', { title: 'Express' });
  };*/

  router.get('/', ctrlMain.index);

module.exports = router;
