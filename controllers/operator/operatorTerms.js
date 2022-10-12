const Terms = require("../../model/TermModel");

const operatorTerms = (req, res) => {
  let { user } = req.session;
  Terms.find({ operator: user._id }, (err, terms) => {
    res.render("operator/terms", { user, terms });
  });
};

module.exports = operatorTerms;
