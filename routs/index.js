const express = require("express")
const router = express.Router()

router.use("/", require("./home"))
router.use("/login", require("../controllers/loginController"))
router.use("/admin", (req, res) => {
    console.log(req.session)
    res.send("Admin section")
})

module.exports = router