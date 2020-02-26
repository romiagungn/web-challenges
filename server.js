const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");
const data = JSON.parse(fs.readFileSync("data.json", "utf8"));
const write = (data) => fs.writeFileSync("data.json", JSON.stringify(data, null, 3));

var bodyParser = require('body-parser')

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({
   extended: false
}))

app.use(bodyParser.json())
app.use("/", express.static(path.join(__dirname, "views")));

app.get('/', (req, res) => {
   res.render("index",{json:data})
})
app.get('/add', (req, res) => {
   res.render("add")
})
app.post('/add',(req, res) => {
   data.push ({
      id: req.body.id,
      string: req.body.string
   })
   write(data);
   res.redirect('/');
})


app.get('/edit/:id', (req, res) => {
   const id = req.params.id;
   res.render("edit",{item:{...data[id]}, id});
})

app.listen(3000, () => {
   console.log(`web ini berjalan di port 3000!`);
});