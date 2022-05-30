const mongoose = require('mongoose')
const { Schema } = mongoose;

const resultSchema = new Schema({
	resultId: Number,
	raceId: Number,
	driverId: Number,
	constructorId: Number,
	grid: Number,
	position: Number,
	points: Number
	fastestLapTime: String

});

module.exports = mongoose.model('result', resultSchema)