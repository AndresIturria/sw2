const mongoose = require('mongoose')
const { Schema } = mongoose;

const circuitSchema = new Schema({
	circuitId: {type: Number, unique: true, required: true},
	circuitRef: {type: String, unique: true, required: true},
	name: {type: String, unique: true, required: true},
	location: {type: String, required: true},
	country: {type: String, required: true}

});

module.exports = mongoose.model('circuit', circuitSchema)