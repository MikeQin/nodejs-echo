const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 80;

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.post("/echo", function(req, res) {
    res.status(200).json({message: 'Hello, ' + req.body.name});
});

app.get("/", function(req, res) {
    res.status(200).send('Hello World! from Heroku');
});

app.listen(port, () => console.log("Listening on port " + port));