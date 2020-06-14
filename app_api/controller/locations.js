const mongoose =require('mongoose');
const loc= mongoose.model('Location');

const locationsCreate = (req, res) => { 
    loc.create({
        name: req.body.name,
        address: req.body.address,
    facilities: req.body.facilities.split(","),
    coords: {
      type: "Point",
      coordinates: [
        parseFloat(req.body.lng),
        parseFloat(req.body.lat)
       ]
    },
    openingTimes: [
      {
        days: req.body.days1,
        opening: req.body.opening1,
        closing: req.body.closing1,
        closed: req.body.closed1
      }
    ]
  },
  (err, location) => {
    if (err) {
      res
        .status(400)
        .json(err);
    } else {
      res
        .status(201)
        .json(location);
    }
  });
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