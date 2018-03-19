var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var regaloSchema = new Schema({
    nombre:     {type:string},
    marca:      {type:string},
    categoria:  {type:string},
    precio:     {type:number},
    existencia: {type:number}
});

module.exports = mongoose.model('regalo', regaloSchema);