var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ActorSchema = new Schema ({

    name : {
        type: String,
        //required : true
        required : 'Kindly enter the name of the actor'
    },
    surname : {
        type: String,
        required : 'Kindly enter the surname of the actor'
    },
    email : {
        type: String,
        required : 'Kindly enter the email of the actor'
    },
    password: { // md5
        type: String,
        required: 'Kindly enter the password of the actor',
        minlength: 5,
    },
    address : {
        type: String,
        required : 'Kindly enter the address of the actor'
    },
    language : {
        type: String,
        default: 'es',
        //required : 'Kindly enter the preferred language of the actor'
    },
    phone : {
        type: String,
        required : 'Kindly enter the phone of the actor'
    },
    photo : { // almacenar la foto dentro de mongoDB, codificada como texto, con base64
        data: Buffer, // array binario, array sin limites
        contentType: String // de tipo cadena el contenido
    },
    validated : {
        type: Boolean,
        default: false
    },
    role: [{
        type: String,
        required: 'Kindly enter the role(s) of the actor',
        enum: ['CUSTOMER','CLERK','ADMINISTRATOR']
    }],
    createdAt: {
        type: Date,
        default: Date.now
    }

}, {strict: false}); // permite añadir nuevos atributos no definidos aqui cuando hago un insert

module.exports = mongoose.model('Actors', ActorSchema);