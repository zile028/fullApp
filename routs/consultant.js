const express = require("express")
const router = express.Router()


router.use(checkUser)

router.get("/", require("../controllers/consultant/consultantController"))
router.get("/term/:id", require("../controllers/consultant/consultantTermController"))
router.post("/report/:id", require("../controllers/consultant/consultantReportTermController"))


function checkUser(req, res, next) {
    let user = req.session.user
    if (user) {
        if (user.role === "savetnik") {
            next()
        } else {
            res.redirect("/")
        }
    } else {
        res.redirect("/")
    }
}


module.exports = router