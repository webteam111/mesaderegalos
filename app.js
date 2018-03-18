var express = require("express"),
app= express(),
bodyParser = require("body-parser"),
methodOverride = require("method-override");
mongoose = require('mongoose');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(methodOverride());

var router =express.Router();
router.get('/', function(req, res) {
    res.send("hola weyes!");
});

app.use(router);

app.listen(3000, function() {
    console.log("servidor node esta corriendo en http://localhost:3000");
});