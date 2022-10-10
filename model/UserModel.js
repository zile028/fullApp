const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
	firstName: {type: String},
	lastName: {type: String},
	password: {type: String},
	role: {type: String},
	email: {type: String},
})

const UserModel = mongoose.model("users", UserSchema)
module.exports = UserModel