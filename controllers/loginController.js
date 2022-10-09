const mongojs = require("mongojs")
const {CONNECTION_STRING} = require("../config/dbConfig")
const db = mongojs(CONNECTION_STRING, ["users"])


const loginController = (req, res) => {
    let {firstName, password} = req.body

    db.users.findOne({firstName, password}, (err, docs) => {
        if (err) {
            res.redirect("/")
        } else {
            if (docs) {
                req.session.user = docs
                switch (docs.role) {
                    case "admin" :
                        res.redirect("/admin")
                        break;
                    case "operater":
                        res.redirect("/operator")
                        break;
                    case "savetnik":
                        res.redirect("/consultant")
                        break;
                    default:
                        res.redirect("/")
                }
            } else {
                res.redirect("/")
            }
        }

    })
}


module.exports = loginController