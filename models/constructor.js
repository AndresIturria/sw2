const mongoose = require('mongoose')
const { Schema } = mongoose;

const constructorSchema = new Schema({
	constructorId: Number,
	constructorRef: String,
	name: String,
	nationality: String

});

module.exports = mongoose.model('constructor', constructorSchema)