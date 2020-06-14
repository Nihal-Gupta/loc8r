const mongoose =require('mongoose');
const loc= mongoose.model('Location');

const locationsCreate = (req, res) => { 
    res.status(200)
    res.json({"status": "sucess"})
};

const locationsListByDistance = (req, res) => { 
    res.status(200)
    res.json({"status": "sucess1"})
};
const locationsReadOne = (req, res) => { 
    console.log("inside the method");
    loc.findById(req.params.locationid)
        .exec((err, response) => {
            if(response){
            res
                .status(200)
                .json(response)

            }else {
                res
                    .status(404)
                    .json({
                        "message": "location not found"
                        });
                console.log('error in fetching data');

            }

                console.log(err +"   eroor ");
                });
};
const locationsDeleteOne = (req, res) => { 
    res.status(200)
    res.json({"status": "sucess"})
};
const locationsUpdateOne = (req, res) => { 
    res.status(200)
    res.json({"status": "sucess"})
};



module.exports = {
    locationsListByDistance,
    locationsCreate,
    locationsReadOne,
    locationsUpdateOne,
    locationsDeleteOne,
    };