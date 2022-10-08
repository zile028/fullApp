const mongojs = require("mongojs")
const {CONNECTION_STRING} = require("../../config/dbConfig")
const db = mongojs(CONNECTION_STRING, ["terms"])

const newTermsController = (req, res) => {
    let {user} = req.session
    db.terms.insert({
        ...req.body,
        active: true,
        costContract: 0,
        entry: false,
        reason: "",
        product: "",
        operator: user._id
    }, (err) => {
        if (err) {
            res.render("error_page", {err})
            return
        }
        res.redirect("/operator")
    })
}
module.exports = newTermsController