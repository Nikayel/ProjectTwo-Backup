const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const bodyparser = require("body-parser");
const path = require("path");


const app = express();

dotenv.config({path: "config.env"})
const PORT = process.env.PORT || 8080;


app.use(morgan("tiny"));


//body bodyparser
app.use(bodyparser.urlencoded({extended: true}))

app.set("view engine", "ejs")

//load assets

app.use("/css", express.static(path.resolve(__dirname, "assets/css")));
app.use("/js", express.static(path.resolve(__dirname, "assets/js")));



app.get("/", function(req,res){
  res.render("index.ejs");
})




app.listen(PORT, () =>{console.log("Server works!")});
