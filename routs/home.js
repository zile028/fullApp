const express = require("express")
const router = express.Router()

router.get("/", checkIsLogin, (req, res) => {
	res.render("index")
})

function checkIsLogin(req, res, next) {
	if (req.session.user) {
		switch (req.session.user.role) {
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
		next()
	}
}


module.exports = router