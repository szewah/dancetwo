const db = require('../models');

module.exports = function(app) {

    app.get('/signup', function(req, res) {
        res.render("index")
    });

    app.post('/signup', async(req, res) => {

        db.User.create({
            firstName: req.body.name,
            lastName: req.body.lastName,
            email: req.body.usereEmail
        }).then(function(results) {
            console.log(results);
        });
    });

};