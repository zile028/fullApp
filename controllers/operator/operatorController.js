const mongojs = require("mongojs")
const {CONNECTION_STRING} = require("../../config/dbConfig")
const db = mongojs(CONNECTION_STRING, ["users", "city", "terms"])

const operatorController = (req, res) => {
    let {user} = req.session
    db.users.find({role: "savetnik"}, (err, savetnici) => {
        db.city.find({}, (err, gradovi) => {
            db.terms.find({operator: user._id}, (err, terms) => {
                console.log(terms)

                res.render("operator/index", {
                    user: user,
                    savetnici: savetnici,
                    gradovi: gradovi,
                    brojTermina: terms.length
                })
            })
        })
    })
}
module.exports = operatorController