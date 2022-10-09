const mongojs = require("mongojs")
const {CONNECTION_STRING} = require("../../config/dbConfig")
const db = mongojs(CONNECTION_STRING, ["terms"])

const consultantTermController = (req, res) => {
    let {user} = req.session
    let {id} = req.params
    db.terms.findOne({_id: mongojs.ObjectID(id)}, (err, term) => {
        res.render("consultant/singleTerm", {
            name: user.firstName,
            term: term
        })
    })

}
module.exports = consultantTermController