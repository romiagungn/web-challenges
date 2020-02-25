const express = require("express");
var app = express();
// const path = require("path");
// const fs = require("fs");
// const data = JSON.parse(fs.readFileSync("data.json", "utf8"));
// const writeData = (data) => fs.writeFileSync("./data.json", JSON.stringify(data, null, 3));

app.use(express.static('views'));
app.get('/index.html', function (req, res) {
   res.sendFile( __dirname + "/" + "index.html" );
})

app.get('/process_get', function (req, res) {
   // Prepare output in JSON format
   response = {
      first_name:req.query.first_name,
      last_name:req.query.last_name
   };
   console.log(response);
   res.end(JSON.stringify(response));
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port

   console.log("Example app listening at http://%s:%s", host, port)
})