const Products = require("../../model/ProductsModel")

const deleteProductController = (req, res) => {
	let id = req.params.productId
	Products.deleteMany({_id: id}, (err) => {
		if (err) {
			//TODO render error page
		} else {
			res.send("OK")

		}
	})
}

module.exports = deleteProductController