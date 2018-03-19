var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var eventoSchema = new Schema({
    correo:     {type:string},
    nombre:     {type:string},
    apellido:   {type:string},
    contraseña: {type:string},
    numero:     {type:number}
});

module.exports = mongoose.model('evento', eventoSchema);