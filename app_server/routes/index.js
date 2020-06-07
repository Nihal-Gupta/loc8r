var express = require('express');
var router = express.Router();
const ctrlMain= require('../controllers/main');
const ctrlLocations = require('../controllers/locations');
const ctrlOthers = require('../controllers/others');
/* GET home page. */


/*const homepageController = (req, res) => {
  res.render('index', { title: 'Express' });
  };*/

  router.get('/', ctrlLocations.homeList);
  router.get('/location', ctrlLocations.locationInfo);
  router.get('/location', ctrlLocations.addReview)

  router.get('/about', ctrlOthers.about);

  
module.exports = router;
