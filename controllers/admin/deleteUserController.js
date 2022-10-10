const User = require("../../model/UserModel")

const deleteUserController = (req, res) => {
	let userId = req.params.userId
	User.deleteOne({_id: userId}, (err) => {
		if (err) {
			//TODO render error page
		} else {
			res.send("OK")

		}
	})
}

module.exports = deleteUserController