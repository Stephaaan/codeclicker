//app = parameter
const router = function(app, db){
    //localhost:8000/
    app.get("/", (req, res) => {
        res.status(404).send({
            message:"not specified"
        });
    });
    ////localhost:8000/getTop
    app.get("/getTop", (req, res)=>{
        db.getTopFive((result) => {
    /*        var answer = "HTTP/1.1 200 OK"
                        +"Content-Type: text/plain\n"
                        +"    Access-Control-Allow-Origin: *\n"
                        +"    Access-Control-Allow-Methods: POST, GET, PUT, DELETE, OPTIONS\n"
                        +"    Access-Control-Allow-Credentials: false\n"
                        +"    Access-Control-Max-Age: 86400\n"
                        +"    Access-Control-Allow-Headers: X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept\n"
                        +"    Date: Fri, 29 Oct 2010 08:27:14 GMT\n"
                        +"    X-Response-Time: 3ms\n"
                        +"    X-Powered-By: Connect 0.2.7\n"
                        +"    Server: Node v0.3.0-pre\n"
                        +"    Connection: keep-alive\n" */
            res.status(200).send(/*answer +"\n"+ */result);
        });
    });
    ////localhost:8000/getMe?id=1
    app.get("/getMe", (req, res)=>{
        var id = req.query.id;
        if(id === undefined){
            res.status(404).send({message:"error"});
            return;
        }
        db.getMyPosition(id, (result) => {
            if(result === "error")
                res.status(404).send({position:result});
            else {
                res.status(201).send({position:result});
            }
        });
    });
    ////localhost:8000/write?id=1&name=Stephaan&acc=1000
    app.get("/write", (req, res) => {
        var id = req.query.id;
        var name = req.query.name;
        var accountBalance = req.query.acc;
        if(id === undefined || accountBalance === undefined || name === undefined){
            res.status(404).send({message:"error"});
            return;
        }
        db.updateMyAccount(id, name, accountBalance, (message)=>{
            if(message === "error")
                res.status(404).send(message);
            else {
                res.status(200).send(message);
            }
        });
    });
    ////localhost:8000/create?id=1&name=Stephaaan&acc=1
    app.get("/create", (req, res) => {
        var id = req.query.id;
        var name = req.query.name;
        var acc = req.query.acc;
        if(id === undefined || name === undefined || acc === undefined){
            res.status(404).send({message:"error"});
            return;
        }
        db.createNewAccount(id,name,acc,(message)=>{
            res.status(201).send(message);
        });
    });
    app.get("/checkId", (req, res) => {
        var id = req.query.id;
        if(id === undefined){
            res.status(400).send({message:"error"});
            return;
        }
        db.checkIfIdIsUsed(id, (arg) =>{
            res.status(200).send({message:arg});
        });
    });
}

//export
module.exports = router;
