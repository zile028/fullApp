const mongojs = require("mongojs")
const dbConfig = require("../../config/dbConfig")
const db = mongojs(dbConfig.CONNECTION_STRING, ["users", "products"])

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