const index = (req, res) => {
    res.render('index', { title: 'Express' });
    };

const about=(req,res) =>{
        res.render('index', { title: 'myExpress' });

    };

module.exports = {
        about,
        myIndex
        };