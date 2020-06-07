var express =require('express');
var router = express.Router();

router.get('/', function(req, res){
    res.render('myview',{super1: 'HelloMyapp'});
        
});

/*const myFunction= function(myFunction){
    console.log('my normal function is working');
};

const myArrowFunction = (req,res) => {
    res.render('myview', {super1: 'My Arrow Function is working'});
}
module.exports ={
    myFunctionv
   // myArrowFunction

};

router.get('/', myFunction);*/

module.exports=router;