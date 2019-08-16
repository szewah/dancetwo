const db = require('../models/user');
const router = require('express').Router();



module.exports = function(app) {

    router.get('/', function(req, res) {
        res.sendFile(path.join(__dirname, "./public/index.html"))
    });

    // POST route for saving a new user
    router.post('/signups', function(req, res) {
        console.log(req,body);
        const {firstName, lastName, userEmail} = req.body;

        db.User.create({
            firstName: firstName,
            lastName: lastName,
            email: userEmail
        }).then(function(results) {
            res.json(results)
        });
    });

    router.get('/signups', function(req, res) {
        db.User.findAll().then(function(results) {
            res.json(results)
        })  
    });

};