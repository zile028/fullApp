const mongojs = require("mongojs")
const {CONNECTION_STRING} = require("../../config/dbConfig")
const db = mongojs(CONNECTION_STRING, ["users", "city", "products"])

const adminController = (req, res) => {
    let {user} = req.session
    db.users.find({}, (err, users) => {
        let operateri = users.filter((el) => el.role === "operater")
        let savetnici = users.filter((el) => el.role === "savetnik")
        db.city.find({}, (err, gradovi) => {
            db.products.find({}, (err, proizvodi) => {
                res.render("admin/adminDashboard", {
                    activeUser: user,
                    operateri: operateri,
                    savetnici: savetnici,
                    gradovi: gradovi,
                    proizvodi: proizvodi
                })
            })
        })
    })

}

module.exports = adminController