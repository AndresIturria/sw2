const mongoose = require('mongoose')
const { Schema } = mongoose;

const raceSchema = new Schema({
	raceId: {type: Number, unique: true, required: true},
	year: {type: Number, required: true},
	round: {type: Number, required: true},
	circuitId: {type: String, required: true},
	name: {type: String, required: true},
	date: {type: String, required: true},
	time: {type: String, required: true},
	fp1_date: String,
	fp1_time: String,
	fp2_date: String,
	fp2_time: String,
	fp3_date: String,
	fp3_time: String,
	quali_date: String,
	quali_time: String
}, {
	versionKey: false
});

module.exports = mongoose.model('race', raceSchema)