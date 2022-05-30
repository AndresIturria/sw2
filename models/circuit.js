const mongoose = require('mongoose')
const { Schema } = mongoose;

const circuitSchema = new Schema({
	circuitId: Number,
	circuitRef: String,
	name: String,
	location: String,
	country: String

});

module.exports = mongoose.model('circuit', circuitSchema)