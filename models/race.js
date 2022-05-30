const mongoose = require('mongoose')
const { Schema } = mongoose;

const raceSchema = new Schema({
	"raceId": Number,
	year: Number,
	round: Number,
	circuitId: Number,
	name: String,
	date: String,
	time: String,
	fp1_date: String,
	fp1_time: String,
	fp2_date: String,
	fp2_time: String,
	fp3_date: String,
	fp3_time: String,
	quali_date: String,
	quali_time: String

});

module.exports = mongoose.model('race', raceSchema)