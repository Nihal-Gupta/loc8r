const reviews = (req, res) =>{
    res.status(200);
};


const reviewsCreate = (req, res) => { 
    res.status(200)
    res.json({"status": "sucess"})
};

const reviewsReadOne = (req, res) => { 
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



module.exports = {
    reviewsDeleteOne,
    reviewsUpdateOne,
    reviewsReadOne,
    reviewsCreate,
    reviews,
    };

