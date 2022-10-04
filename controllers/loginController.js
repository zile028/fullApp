const mongojs = require("mongojs")

const db = mongojs("fullapp",["users"])

const loginController = (req,res)=>{
	//preuzeti podatke
	let firstName = req.body.name
	let password = req.body.password
	db.users.findOne({firstName,password},(err,docs)=>{
		if(err){
			console.log("GRESKA")
			res.redirect("/")
		}else{
			if(docs){
				let user = docs
				console.log(user)
				if(user.isAdmin){
					res.redirect("/admin")
				}else{
					res.redirect("/")
				}
			}else{
				res.redirect("/")
			}
		}
	})


}


module.exports = loginController