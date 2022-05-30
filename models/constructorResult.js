const mongoose = require('mongoose')
const { Schema } = mongoose;

const constructorResultSchema = new Schema({
	constructorResultId: Number,
	raceID: Number,
	ConstructorId: Number,
	points: Number,

});

module.exports = mongoose.model('constructorResult', constructorResultSchema)