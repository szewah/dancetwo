const db = require('../models');
const router = require('express').Router();


module.exports = function(app) {

    router.get('/', function(req, res) {
        res.sendFile(path.join(__dirname, "./public/index.html"))
    });

    router.post('/signups', async(req, res) => {

        db.User.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.userEmail
        }).then(function(results) {
            res.send("Post made");
        });
    });

};