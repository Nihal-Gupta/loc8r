const express = require('express');
const router = express.Router();
const contrlLocations = require('../controller/locations');
const ctrlReviews = require('../controller/reviews');


router
    .route('/locations')
    .get(contrlLocations.locationsListByDistance)
    .post(contrlLocations.locationsCreate)

router
    .route('/locations:locationid')
    .get(contrlLocations.locationsReadOne)
    .put(contrlLocations.locationsUpdateOne)
    .delete(contrlLocations.locationsDeleteOne);

router
    .route('/locations/:locationid/reviews')
    .post(ctrlReviews.reviewsCreate);
router
    .route('/locations/:locationid/reviews/:reviewid')
    .get(ctrlReviews.reviewsReadOne)
    .put(ctrlReviews.reviewsUpdateOne)
    .delete(ctrlReviews.reviewsDeleteOne);

module.exports =router;