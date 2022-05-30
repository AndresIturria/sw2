const mongoose = require('mongoose')
const { Schema } = mongoose;

const qualifyingSchema = new Schema({
	qualifyId: Number,
	raceId: Number,
	driverId: Number,
	constructorId: Number,
	number: Number,
	position: Number,
	q1: String,
	q2: String,
	q3: String

});

module.exports = mongoose.model('qualifying', qualifyingSchema)