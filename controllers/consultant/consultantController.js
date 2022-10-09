const mongojs = require("mongojs")
const {CONNECTION_STRING} = require("../../config/dbConfig")
const db = mongojs(CONNECTION_STRING, ["terms"])


const consultantController = (req, res) => {
    let {user} = req.session
    db.terms.find({termsConsultant: user._id, active: true}, (err, terms) => {
        res.render("consultant/index", {
            name: user.firstName,
            terms: terms
        })

    })
}
module.exports = consultantController