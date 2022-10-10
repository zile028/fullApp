const Users = require("../../model/UserModel")
const City = require("../../model/CityModel")
const Products = require("../../model/ProductsModel")

const adminController = (req, res) => {
	let {user} = req.session
	
	Users.find({}, (err, users) => {
		let operateri = users.filter((el) => el.role === "operater")
		let savetnici = users.filter((el) => el.role === "savetnik")
		City.find({}, (err, gradovi) => {
			Products.find({}, (err, proizvodi) => {
				res.render("admin/adminDashboard", {
					activeUser: user,
					operateri: operateri,
					savetnici: savetnici,
					gradovi: gradovi,
					proizvodi: proizvodi
				})
			})
		})
	})

}

module.exports = adminController