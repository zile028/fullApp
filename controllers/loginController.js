const Users = require("../model/UserModel")

const loginController = (req, res) => {
	let {firstName, password} = req.body

	Users.findOne({firstName, password}, (err, docs) => {
		if (err) {
			res.redirect("/")
		} else {
			if (docs) {
				req.session.user = docs
				switch (docs.role) {
					case "admin" :
						res.redirect("/admin")
						break;
					case "operater":
						res.redirect("/operator")
						break;
					case "savetnik":
						res.redirect("/consultant")
						break;
					default:
						res.redirect("/")
				}
			} else {
				res.redirect("/")
			}
		}

	})
}


module.exports = loginController