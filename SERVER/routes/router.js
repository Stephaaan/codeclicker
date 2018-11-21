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
            res.status(201).send(result);
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
            if(result === "error");
                res.status(404).send({position:result});
            else {
                res.status(201).send({position:result});
            }
        });
    });
    ////localhost:8000/write?id=1&acc=1000
    app.get("/write", (req, res) => {
        var id = req.query.id;
        var accountBalance = req.query.acc;
        if(id === undefined || accountBalance === undefined){
            res.status(404).send({message:"error"});
            return;
        }
        db.updateMyAccount(id, accountBalance, (message)=>{
            if(message === "error")
                res.status(404).send(message);
            else {
                res.status(201).send(message);
            }
        });
    });
    ////localhost:8000/create?id=1&name=Stephaaan&accountBalance=1
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
}

//export
module.exports = router;
