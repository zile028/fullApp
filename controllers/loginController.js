const mongojs = require("mongojs")
const dbConfig = require("../config/dbConfig")
const db = mongojs(dbConfig.CONNECTION_STRING, ["users"])

const loginController = (req, res) => {
	let {firstName, password} = req.body
	db.users.findOne({firstName, password}, (err, docs) => {
		console.log("login", docs)
		if (err) {
			res.redirect("/")
		} else {
			if (docs) {
				req.session.user = docs
				if (docs.role === "admin") {
					res.redirect("/admin")
				} else {
					res.redirect("/")
				}
			} else {
				res.redirect("/")
			}
		}


	})


}


module.exports = loginController