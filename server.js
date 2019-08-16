const express = require('express');
const PORT = process.env.PORT || 8080;
const path = require('path');
const bodyParser = require('body-parser');
const logger = require('morgan');
const db = require('./models');

//initialize express
const app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

//set up logger
app.use(logger('dev'));
//set up express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());


// require('./routes/userRoute')(app);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "./index.html"))
});

app.post('/api/signups', (req, res) => {
    console.log(req.body);
    db.User.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.userEmail
    }).then(function(results) {
        res.json(results)
    });
});


app.get('/signups', function(req, res) {
    db.User.findAll().then(function(results) {
        res.json(results)
    })  
});

app.listen(PORT, function(err) {
    console.log('Magic is happening on port http://localhost:' + PORT);
})

  