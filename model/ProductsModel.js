const mongoose = require("mongoose")

const ProductsSchema = new mongoose.Schema({
	productName: {type: String},
	price: {type: String},
})

const ProductModel = mongoose.model("products", ProductsSchema)
module.exports = ProductModel