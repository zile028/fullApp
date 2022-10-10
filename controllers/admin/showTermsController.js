const Users = require("../../model/UserModel")
const Terms = require("../../model/TermModel")

const showTermsController = (req, res, next) => {
	let {id} = req.params;
	Users.findOne({_id: id}, (err, user) => {
		Terms.find({termsConsultant: id}, (err, terms) => {
			res.render("admin/adminTerms", {terms, user});
		});
	});

};
module.exports = showTermsController;
