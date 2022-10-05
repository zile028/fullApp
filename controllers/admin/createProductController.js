const mongojs = require("mongojs")
const db = mongojs("fullapp", ["users", "products"])

const createProductController = (req, res) => {
	let {productName, price} = req.body
	db.products.insertOne({productName, price}, (err, docs) => {
		if (err) {
			//	TODO display error page
		} else {
			res.redirect("/admin")
		}
	})
}
module.exports = createProductController