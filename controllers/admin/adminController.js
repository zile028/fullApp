const mongojs = require("mongojs")
const db = mongojs("fullapp", ["users", "city", "products"])

const adminController = (req, res) => {
    let {user} = req.session
    if (!req.session.user) {
        res.redirect("/")
        return
    }
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