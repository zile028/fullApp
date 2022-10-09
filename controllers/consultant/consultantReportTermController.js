const mongojs = require("mongojs")
const {CONNECTION_STRING} = require("../../config/dbConfig")
const db = mongojs(CONNECTION_STRING, ["terms"])

const consultantReportTermController = (req, res) => {
    let {id} = req.params
    db.terms.update({_id: mongojs.ObjectID(id)}, {
        $set: {
            active: false
        }
    }, (err, docs) => {
        res.redirect("/consultant")
    })
}
module.exports = consultantReportTermController