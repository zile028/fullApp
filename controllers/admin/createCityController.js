const mongojs = require("mongojs")
const {CONNECTION_STRING} = require("../../config/dbConfig")
const db = mongojs(CONNECTION_STRING, ["users", "city"])

const createCityController = (req, res) => {
    let {cityName, zip} = req.body
    db.city.insertOne({cityName, zip}, (err, docs) => {
        if (err) {
            //TODO	display error page
        } else {
            res.redirect("/admin")
        }
    })
}

module.exports = createCityController