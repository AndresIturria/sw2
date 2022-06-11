const mongoose = require('mongoose')
const { Schema } = mongoose;

const qualifyingSchema = new Schema({
	qualifyId: {type: String, unique: true, required: true},
	raceId: {type: String, required: true},
	driverId: {type: String, required: true},
	constructorId: {type: String, required: true},
	number: {type: String, required: true},
	position: {type: String, required: true},
	q1: String,
	q2: String,
	q3: String

});

module.exports = mongoose.model('qualifying', qualifyingSchema)