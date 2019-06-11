var mongoose = require('mongoose');

require('../models/wolf.js');
const Wolf = mongoose.model('Wolf');

module.exports = {
    index: (req, res) => {
        Wolf.find({}, function(err, wolves){
            if(err){
                console.log(err);
            }
            else{
                console.log(wolves);
                res.render('index', {all_wolves: wolves});
            }
        })
    },
    new: (req, res) => {
        res.render('form');
    },
    create: (req, res) => {
        console.log("POST DATA", req.body);
        var newWolf = new Wolf();
        newWolf.name = req.body.name;
        newWolf.gender = req.body.gender;
        newWolf.position = req.body.position;
        newWolf.image = req.body.image;
        newWolf.save(function(err){
            if(err) {
                console.log(err);
            }
            else {
                console.log("successfully added quote!");
                res.redirect('/');
            }
        })
    },
    edit: (req, res) => {
        Wolf.findById({_id:req.params.id}, function(err, wolves){
            if(err){
                console.log(err);
            }
            else{
                res.render('edit', {wolf: wolves});
            }
        })
    },
    show: (req, res) => {
        Wolf.findById({_id:req.params.id}, function(err, wolves){
            res.render('show', {wolf: wolves});
        })
    },
    update: (req, res) => {
        var wolf = Wolf.findById({id:req.params.id});
        wolf.name = req.body.name;
        wolf.gender = req.body.gender;
        wolf.position = req.body.position;
        wolf.image = req.body.image;
        wolf.save(function(err){
            if(err) {
                console.log(err);
            }
            else {
                console.log("successfully added quote!");
                res.redirect('/');
            }
        })
    },
    destroy: (req, res) => {
        Wolf.findById({_id: req.params.id}, function(err,wolves){
            wolves.remove(function(err){
                if(err){
                    console.log(err);
                } else {
                    console.log("successfully deleted")
                    res.redirect('/');
                }
            })
        })
    }
}