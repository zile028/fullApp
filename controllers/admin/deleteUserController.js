const mongojs = require("mongojs")
const dbConfig = require("../../config/dbConfig")
const db = mongojs(dbConfig.CONNECTION_STRING, ["users"])

const deleteCityController = (req, res) => {
    let userId = req.params.userId
    db.users.remove({_id: mongojs.ObjectID(userId)}, (err, docs) => {
        res.send("OK")
    })
}

module.exports = deleteCityController