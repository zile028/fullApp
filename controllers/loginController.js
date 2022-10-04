const mongojs = require("mongojs")
const db = mongojs("fullapp", ["users"])

const loginController = (req, res) => {
    let {firstName, password} = req.body
    db.users.findOne({firstName, password}, (err, docs) => {
        if (err) {
            res.redirect("/")
        } else {
            if (docs) {
                req.session.user = docs
                if (docs.role === "admin") {
                    res.redirect("/admin")
                } else {
                    res.redirect("/")
                }
            } else {
                res.redirect("/")
            }
        }
    })


}


module.exports = loginController