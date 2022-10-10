const express = require("express");
const router = express.Router();

router.use(checkAdmin);

router.get("/", require("../controllers/admin/adminController"));


//CREATE
router.get("/create/city", (req, res) => {
	res.render("admin/createCity");
});

router.get("/create/user", (req, res) => {
	res.render("admin/adminCreateForm");
});


router.post("/create/save", require("../controllers/admin/saveController"));
router.post(
  "/create/city/save",
  require("../controllers/admin/createCityController")
);
router.get("/create/product", (req, res) => {
	res.render("admin/createProduct");
});
router.post(
  "/create/product/save",
  require("../controllers/admin/createProductController")
);


router.get(
  "/showTerms/:id",
  require("../controllers/admin/showTermsController.js")
);


//DELETE
router.get(
  "/delete/user/:userId",
  require("../controllers/admin/deleteUserController")
);
router.get(
  "/delete/city/:cityId",
  require("../controllers/admin/deleteCityController")
);
router.get(
  "/delete/product/:productId",
  require("../controllers/admin/deleteProductController")
);


function checkAdmin(req, res, next) {
	let user = req.session.user;
	if (user) {
		if (user.role === "admin") {
			next();
		} else {
			res.redirect("/");
		}
	} else {
		res.redirect("/");
	}
}

module.exports = router;
