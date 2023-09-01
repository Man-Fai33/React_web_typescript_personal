// import
const express = require('express');
const https = require('https')
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const bodyParser = require('body-parser');
var cors = require('cors')
var mongoose = require('mongoose');
var morgan = require('morgan');

require('dotenv').config()

var morgan = require('morgan');




async function connectToDatabase() {
     try {
          await mongoose.connect("mongodb+srv://" + process.env.M_USERNAME + ":" + process.env.M_PASSWORD + "@databaseonly.kvchjvq.mongodb.net/" + process.env.M_DBNAME + "?retryWrites=true&w=majority", {
               useUnifiedTopology: true,
               useNewUrlParser: true
          });
          console.log("已成功连接到 MongoDB");
     } catch (error) {
          console.error("连接 MongoDB 出错：", error);
     }
}
connectToDatabase();

const app = express()
// routers
var UserRouter = require('./api/routes/users')



//allow other device access
app.use(cors())
app.use((req, res, next) => {
     res.header('Access-Control-Allow-Origin', '*');
     res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
     if (req.method === 'OPTIONS') {
          res.header('Access-Control-Allow-Methods', 'PUT , POST, PATCH, DELETE , GET');
          return res.status(200).json({});
     }
     next();
})
//body parser
// These must be placed under body parser!!!
app.listen(process.env.PORT);
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true, parameterLimit: 50000 }));
app.use(bodyParser.json({ limit: '50mb' }));


//use router 
app.use('/user',UserRouter)






mongoose.Promise = global.Promise;
//error handle 
app.use((req, res, next) => {
     const error = new Error('Not Found');
     error.status = 404;
     const remoteAddress = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
     console.log(remoteAddress)
     next(error);
});

//send back error object as json
app.use((error, req, res, next) => {
     console.error(error);
     res.status(error.status || 500);
     res.json({
          error: {
               message: error.message
          }
     });
});

module.exports = app;