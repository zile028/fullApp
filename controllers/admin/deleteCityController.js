const mongojs = require("mongojs")
const {CONNECTION_STRING} = require("../../config/dbConfig")
const db = mongojs(CONNECTION_STRING, ["city"])

const deleteProductController = (req, res) => {
    let id = req.params.cityId
    db.city.remove({_id: mongojs.ObjectID(id)}, (err, docs) => {
        res.send("OK")
    })
}

module.exports = deleteProductController