const City = require("../../model/CityModel")

const deleteCityController = (req, res) => {
	let id = req.params.cityId
	City.deleteMany({_id: id}, (err) => {
		if (err) {
			//TODO render error page
		} else {
			res.send("OK")

		}
	})
}

module.exports = deleteCityController