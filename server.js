const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");
const data = JSON.parse(fs.readFileSync("data.json", "utf8"));
const writeData = (data) => fs.writeFileSync("./data.json", JSON.stringify(data, null, 3));

var bodyParser = require('body-parser')

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({
   extended: false
}))

app.use(bodyParser.json())
app.use("/", express.static(path.join(__dirname, "views")));

app.get('/', function (req, res) {
   res.render('index',{json:data})
})

app.listen(3000, () => {
   console.log(`web ini berjalan di port 3000!`);
});