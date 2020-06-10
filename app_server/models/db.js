 const mongoose = require('mongoose');
 let dbURI= 'mongodb://localhost:27017/ng8crud';
 const readline = require('readline');
 const schema = require('./Schema');

 if (process.env.NODE_ENV === 'production') {
    dbURI = process.env.MLAB_URI;
    console.log('Got the db url from config ');
    }
 const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
    poolSize: 10, // Maintain up to 10 socket connections
    serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
    //socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
  };

  if(process.platform==='win32'){
      const r1= readline.createInterface({
        input : process.stdin,
        output: process.stdout
      });

      r1.on('SIGINT', () => {
        process.emit("SIGINT");
        console.log('Emmiting SIGNIT' +process.stdin);
      });
  }

    process.on('SIGINT', ()=>{
        shutdown('app termination because of SIGNIT ', ()=>{
            process.exit(0);
        });
    });

    process.on('SIGTERM', ()=>{
        shutdown('app termination because of Heroku ', ()=>{
            process.exit(0);
        });
    });

 const shutdown=(msg,callBack) =>{
    mongoose.connection.close( () => {
        console.log(`Disconnecting connection because of ${msg}`);
        callBack();
    })
 };

 mongoose.connect(dbURI, options).catch(error =>handleError(error));
 mongoose.connection.on('connected', () => {
     console.log(`DB is connected succesfully ${dbURI}`);
 });

 mongoose.connection.on('error', err =>{
     console.log(`Error in connecting check url ${dbURI} `, err)
 });

 mongoose.connection.on('disconnected', err =>{
     console.log('db is disconnected ', err);
 });