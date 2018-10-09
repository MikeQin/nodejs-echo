const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const port = 80;

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.post("/echo", function(req, res) {
    res.status(200).json({message: 'Hello, ' + req.body.name});
});

app.listen(port, () => console.log("Listening on port " + port));