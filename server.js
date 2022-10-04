const express = require("express")
const app=express()
const routes = require("./routs")

app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(express.static(__dirname + "/public"))
app.use("/",routes)
app.set("view engine", "ejs")

app.listen(3000, ()=>{
    console.log("Listening on port 3000")
    console.log("http:/localhost:3000")
})