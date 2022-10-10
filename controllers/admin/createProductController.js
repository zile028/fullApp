const Products = require("../../model/ProductsModel")

const createProductController = (req, res) => {
	let {productName, price} = req.body

	let newProduct = new Products({...req.body})
	newProduct.save((err, docs) => {
		if (err) {
			//	TODO display error page
		} else {
			res.redirect("/admin")
		}
	})

}
module.exports = createProductController