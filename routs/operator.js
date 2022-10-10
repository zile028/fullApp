const express = require("express")
const router = express.Router()

router.use(checkOperator)

router.get("/", require("../controllers/operator/operatorController"))

// router.post("/newTerms", require("../controllers/operator/newTermsController"))

function checkOperator(req, res, next) {
	let user = req.session.user
	if (user) {
		if (user.role === "operater") {
			next()
		} else {
			res.redirect("/")
		}
	} else {
		res.redirect("/")
	}
}

module.exports = router