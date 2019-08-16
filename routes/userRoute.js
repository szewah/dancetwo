const db = require('../models');
const router = require('express').Router();



module.exports = (app) => {

    router.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, "./index.html"))
    });

    // POST route for saving a new user
    router.post('/api/signups', async(req, res) => {
        console.log(req,body);
        db.User.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.userEmail
        }).then(function(results) {
            res.json(results)
        });
    });

    //GET route for finding all users
    router.get('/signups', function(req, res) {
        db.User.findAll().then(function(results) {
            res.json(results)
        })  
    });

};