const locationsCreate = (req, res) => { 
    res.status(200)
    res.json({"status": "sucess"})
};

const locationsListByDistance = (req, res) => { 
    res.status(200)
    res.json({"status": "sucess1"})
};
const locationsReadOne = (req, res) => { 
    res.status(200)
    res.json({"status": "sucess"})
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