var express = require('express');
var PORT = process.env.PORT || 8080;
// var db = require ('./models');

var app = express();


app.listen(PORT, function(err) {
    console.log('Magic is happeing on port http://localhost:' + PORT);
})