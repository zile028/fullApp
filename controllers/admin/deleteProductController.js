const mongojs = require("mongojs")
const dbConfig = require("../../config/dbConfig")
const db = mongojs(dbConfig.CONNECTION_STRING, ["products"])

const deleteProductController = (req, res) => {
    let id = req.params.productId
    db.products.remove({_id: mongojs.ObjectID(id)}, (err, docs) => {
        res.send("OK")
    })
}

module.exports = deleteProductController