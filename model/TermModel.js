const mongoose = require("mongoose")

const TermSchema = new mongoose.Schema({
	clientFirstName: {type: String, default: ""},
	clientLastName: {type: String, default: ""},
	clientEmail: {type: String, default: ""},
	clientYear: {type: String, default: ""},
	supposeFirstName: {type: String, default: ""},
	supposeLastName: {type: String, default: ""},
	suposeYear: {type: String, default: ""},
	clientPhone: {type: String, default: ""},
	clientMobil: {type: String, default: ""},
	clientAddress: {type: String, default: ""},
	termsDatum: {type: String, default: ""},
	termsVreme: {type: String, default: ""},
	termsConsultant: {type: String, default: ""},
	termsWorkCity: {type: String, default: ""},
	clientChildren: {type: String, default: ""},
	clientOperation: {type: String, default: ""},
	clientTherapy: {type: String, default: ""},
	termsNote: {type: String, default: ""},
	active: {type: Boolean, default: true},
	costContract: {type: Number, default: 0},
	entry: {type: Boolean, default: true},
	reason: {type: String, default: ""},
	product: {type: String, default: ""},
	operator: {type: String, default: ""}
})

const TermModel = mongoose.model("terms", TermSchema)
module.exports = TermModel