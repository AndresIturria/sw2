const mongoose = require('mongoose')
const { Schema } = mongoose;

const constructorSchema = new Schema({
	constructorId: {type: Number, unique: true, required: true},
	constructorRef: {type: String, unique: true, required: true},
	name: {type: String, unique: true, required: true},
	nationality: {type: String, required: true}

});

module.exports = mongoose.model('constructor', constructorSchema)