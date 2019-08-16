const express = require('express');
const PORT = process.env.PORT || 8080;
const path = require('path');
const bodyParser = require('body-parser');
const logger = require('morgan');



//initialize express
const app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

//set up logger
app.use(logger('dev'));
//set up express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

require('./routes/userRoute')(app);

app.listen(PORT, function(err) {
    console.log('Magic is happening on port http://localhost:' + PORT);
})

  