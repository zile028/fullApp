const Users = require("../../model/UserModel")
const Terms = require("../../model/TermModel")
const City = require("../../model/CityModel")

const operatorController = (req, res) => {
	let {user} = req.session
	Users.find({role: "savetnik"}, (err, savetnici) => {
		City.find({}, (err, gradovi) => {
			Terms.find({operator: user._id}, (err, terms) => {
				res.render("operator/index", {
					user: user,
					savetnici: savetnici,
					gradovi: gradovi,
					brojTermina: terms.length
				})
			})
		})
	})
}
module.exports = operatorController