const Users = require("../../model/UserModel")
const saveController = (req, res) => {
	let {firstName, lastName, password, role, email} = req.body
	let newUser = new Users({firstName, lastName, password, role, email})
	newUser.save((err, doc) => {
		if (err) {
			//TODO	display error page
		} else {
			console.log(doc)
			res.redirect("/admin")
		}
	})
}

module.exports = saveController