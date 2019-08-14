const express = require('express');
const PORT = process.env.PORT || 8080;
// var db = require ('./models');
const bodyParser = require('body-parser');
const logger = require('morgan');
const http = require('http');


//set up express app
const app = express();


app.listen(PORT, function(err) {
    console.log('Magic is happeing on port http://localhost:' + PORT);
})