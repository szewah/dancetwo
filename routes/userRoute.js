const db = require('../models');
const router = require('express').Router();


module.exports = function(app) {

    router.get('/', function(req, res) {
        res.sendFile(path.join(__dirname, "./public/index.html"))
    });

    router.post('/', async(req, res) => {

        db.User.create({
            firstName: req.body.name,
            lastName: req.body.lastName,
            email: req.body.usereEmail
        }).then(function(results) {
            console.log(results);
        });
    });

};