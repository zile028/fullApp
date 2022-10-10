const mongoose = require("mongoose")

const CitySchema = new mongoose.Schema({
	cityName: {type: String},
	zip: {type: String},
})

const CityModel = mongoose.model("cities", CitySchema)
module.exports = CityModel