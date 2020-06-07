const index = (req, res) => {
    res.render('index', { title: 'Express' });
    };

const myIndex=(req,res) =>{
        res.render('index', { title: 'myExpress' });

    };

module.exports = {
        index,
        myIndex
        };