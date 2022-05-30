const mongoose = require('mongoose')
const { Schema } = mongoose;

const driverSchema = new Schema({
	driverId: Number,
	driverRef: String,
	number: Number,
	code: String,
	forename: String,
	surname: String,
	dob: Date,
	nationality: String

});

module.exports = mongoose.model('driver', driverSchema)