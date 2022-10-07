const mongojs = require("mongojs")
const dbConfig = require("../../config/dbConfig")
let collection = ["users", "city", "products"]
const db = mongojs(dbConfig.CONNECTION_STRING, collection)
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