const express = require('express');
const PORT = process.env.PORT || 8080;
const path = require('path');
// var db = require ('./models');
const bodyParser = require('body-parser');
const logger = require('morgan');


//initialize express
const app = express();

//set up logger
app.use(logger('dev'));
//set up express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

// require("./routes/userRoute")(app);
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, "./public/index.html"))
});


app.listen(PORT, function(err) {
    console.log('Magic is happeing on port http://localhost:' + PORT);
})