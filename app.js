'use strict';

var express = require("express"),
    app= express(),
    bodyParser = require("body-parser"),
    http = require ("http"),
    server = http.createServer(app),
    methodOverride = require("method-override");
var mongoose = require('mongoose');
    mongoose.connect('mongodb://localhost/evento', function(err, res){

    if(err) {
        console.log('ERROR: conectando a base de datos. ' + err);
    }
    else
    {
        console.log('base de datos Conectada')
    }

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(methodOverride());

var router =express.Router();
router.get('/', function(req, res) {
    res.send("hola weyes!");
});

app.use(router);

app.listen(8080, function() {
    console.log("servidor node esta corriendo en http://localhost:8080");
});
});