const express = require("express")
const router = express.Router()

router.get("/", require("../controllers/admin/adminController"))

router.get("/create", (req, res) => {
	res.render("admin/adminCreateForm")
})

router.get("/create/city", (req, res) => {
	res.render("admin/createCity")
})

router.get("/create/product", (req, res) => {
	res.render("admin/createProduct")
})


router.post("/create/save", require("../controllers/admin/saveController"))
router.post("/create/city/save", require("../controllers/admin/createCityController"))
router.post("/create/product/save", require("../controllers/admin/createProductController"))

module.exports = router