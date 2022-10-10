const City = require("../../model/CityModel")

const createCityController = (req, res) => {
	let {cityName, zip} = req.body
	let newCity = new City({cityName, zip})
	newCity.save((err, docs) => {
		if (err) {
			//TODO	display error page
		} else {
			res.redirect("/admin")
		}
	})

}

module.exports = createCityController