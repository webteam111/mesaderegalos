//File controllers/evento.js
module.exports = function(app) {
var mongoose = require('mongoose');
var evento = mongoose.model('evento');

var eventos = require('../models/evento')


//GET -mostrar todos los eventos de la BD
exports.findAlleventos = function(req,res){
    evento.find(function(err, eventos){
        if(err) res.send(500, err.message);

        console.log('GET /eventos') 
        res.status(200).jsonp(eventos);
    });
};

//GET - mostrar un evento con especificacion ID
exports.finById = function(req, res) {
    evento.findById(req.params.id, function(err, evento){
        if(err) res.send(500, err.message);

        console.log('GET /evento/' + req.params.id); 
        res.status(200).jsonp(evento);
    });
};

//POST - insertar un  nuevo evento en la BD
exports.addevento = function(req, res) {
	console.log('POST');
	console.log(req.body);

	var evento = new evento({
		correo:       req.body.correo,
	    nombre: 	  req.body.nombre,
		apellido:     req.body.apellido,
		contraseña:   req.body.contraseña,
		numero:       req.body.numero
		
	});

	evento.save(function(err, evento) {
		if(err) return res.status(500).send( err.message);
    res.status(200).jsonp(evento);
	});
};

//PUT - Actualiza un evento especificado ya registrado en la BD
exports.updateevento = function(req, res) {
	evento.findById(req.params.id, function(err, evento) {
		evento.correo      =   req.body.correo;
		evento.nombre      =   req.body.nombre;
		evento.apellido    =   req.body.apellido;
		evento.contraseña  =   req.body.contraseña;
		evento.numero      =   req.body.numero;

		evento.save(function(err) {
			if(err) return res.status(500).send(err.message);
      res.status(200).jsonp(evento);
		});
	});
};

//DELETE - Elimina un evento especificado de la BD
exports.deleteevento = function(req, res) {
	evento.findById(req.params.id, function(err, evento) {
		evento.remove(function(err) {
			if(err) return res.status(500).send(err.message);
      res.status(200).send();
		})
	});
};

//Link de rutas y funciones
app.get('/eventos', findAlleventos);
app.get('/evento/:id', findById);
app.post('/evento', addevento);
app.put('/evento/:id', updateevento);
app.delete('/evento/:id', deleteevento);
}