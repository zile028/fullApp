const express = require("express")
const router = express.Router()


router.use("/", require("./home"))
router.use("/login", require("../controllers/loginController"))
router.use("/admin", require("./admin"))
router.use("/operator", require("./operator"))
router.use("/consultant", require("./consultant"))
router.use("/logout", require("./logout"))


module.exports = router