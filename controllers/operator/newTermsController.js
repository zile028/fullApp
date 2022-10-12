const Terms = require("../../model/TermModel");

const newTermsController = (req, res) => {
  let { user } = req.session;
  let newTerm = new Terms({
    ...req.body,
    active: true,
    costContract: 0,
    entry: false,
    reason: "",
    product: "",
    operator: user._id,
  });
  newTerm.save((err, docs) => {
    if (err) {
      res.render("error_page", { err });
      return;
    }
    res.redirect("/operator");
  });
};
module.exports = newTermsController;
