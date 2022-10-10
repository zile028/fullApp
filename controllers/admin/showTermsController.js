const mongojs = require("mongojs");
const { CONNECTION_STRING } = require("../../config/dbConfig");
const db = mongojs(CONNECTION_STRING, ["terms"]);

const showTermsController = (req, res, next) => {
  let { id } = req.params;
  db.users.findOne({ _id: mongojs.ObjectID(id) }, (err, user) => {
    db.terms.find({ termsConsultant: id }, (err, terms) => {
      res.render("admin/adminTerms", { terms, user });
    });
  });

  let test = db.users.aggregate([
    {
      $lookup: {
        from: "terms",
        localField: "_id",
        foreignField: "termsConsultant",
        as: "consultantTerms",
      },
    },
  ]);
};
module.exports = showTermsController;
