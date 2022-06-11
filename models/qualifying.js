const mongoose = require('mongoose')
const { Schema } = mongoose;

const qualifyingSchema = new Schema({
	qualifyId: {type: Number, unique: true, required: true},
	raceId: {type: Number, required: true},
	driverId: {type: Number, required: true},
	constructorId: {type: Number, required: true},
	number: {type: Number, required: true},
	position: {type: Number, required: true},
	q1: String,
	q2: String,
	q3: String

});

module.exports = mongoose.model('qualifying', qualifyingSchema)