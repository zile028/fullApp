const mongojs = require("mongojs")
const {CONNECTION_STRING} = require("../../config/dbConfig")
const db = mongojs(CONNECTION_STRING, ["users"])
const saveController = (req, res) => {
    let {firstName, lastName, password, role, email} = req.body
    db.users.insertOne({firstName, lastName, password, role, email}, (err, docs) => {
        if (err) {
            //TODO	display error page
        } else {
            res.redirect("/admin")
        }
    })
}

module.exports = saveController