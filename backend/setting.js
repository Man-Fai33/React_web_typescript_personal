//import
const http = require('http');
const https = require('https')
const fs = require('fs')


var server = https.createServer(app)
//list port
server.listen(port);
//log
console.log("Listen: " + process.env.HOST + ":" + port);