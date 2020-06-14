const moongoose = require('mongoose');
const reviewModel = moongoose.model('Location');
///locations/:locationid/reviews
const reviewsReadOne = (req, res) =>{
        reviewModel.findById(req.params.locationid)
                    .select('name reviews')
                    .exec((error, response) =>{
                        if (!response) {
                            return res
                            .status(404)
                            .json({
                            "message": "location not found"
                            });
                            } else if (error) {
                            return res
                            .status(400)
                            .json(error);
                            }

                            if (response.reviews && response.reviews.length > 0) {
                                const review = response.reviews.id(req.params.reviewid);
                                        if (!review) {
                                            return res
                                                   .status(400)
                                                   .json({"message": "review not found"});
                                        } else {
                                            reviewResponse = {
                                            location : {
                                            name : response.name,
                                            id : req.params.response},
                                            review};
                                            return res
                                                    .status(200)
                                                    .json(reviewResponse)}
                            } else {
                                return res
                                        .status(404)
                                        .json({
                                            "message": "No reviews found"});
                            }
                                            } );


};

const reviewsCreate = (req, res) => { 
    res.status(200)
    res.json({"status": "sucess"})
};
const reviewsUpdateOne = (req, res) => { 
    res.status(200)
    res.json({"status": "sucess"})
};
const reviewsDeleteOne = (req, res) => { 
    res.status(200)
    res.json({"status": "sucess"})
};

module.exports ={
    reviewsDeleteOne,
    reviewsUpdateOne,
    reviewsCreate,
    reviewsReadOne
}