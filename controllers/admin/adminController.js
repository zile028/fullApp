const mongojs = require("mongojs")
const dbConfig = require("../../config/dbConfig")
const db = mongojs(dbConfig.CONNECTION_STRING, ["users", "city", "products"])

const adminController = (req, res) => {
	let user = req.session.user
	if (!user) {
		res.redirect("/")
		return
	}

	db.users.find({}, (err, users) => {
		db.city.find({}, (err, cities) => {
			db.products.find({}, (err, products) => {

				let operateri = users.filter((el) => el.role === "operater")
				let savetnici = users.filter((el) => el.role === "savetnik")
				res.render("admin/adminDashboard",
				  {
					  name: user.firstName,
					  gradovi: cities,
					  proizvodi: products,
					  operateri: operateri,
					  savetnici: savetnici
				  }
				)
			})
		})
	})
}


module.exports = adminController