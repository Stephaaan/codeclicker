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
app.use((req, res, next)=>{
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
//call the router
routes(app,db);

var server = app.listen(port, (req, res) => {
});
