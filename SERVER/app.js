const expres = require('express');
const mongo = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const routes = require("./routes/router");
const Database = require("./database/db");

const app = expres();
const port = 8000;

var db = new Database(mongo);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true,
}));

//call the router
routes(app,db);

var server = app.listen(port, (req, res) => {
        console.log("We're live on "+port);
        console.log("");
});
