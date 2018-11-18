//app = parameter
const router = function(app, db){
    //localhost:8000/
    app.get("/", (req, res) => {
        res.send({
            message:"not specified"
        });
    });
    ////localhost:8000/getTop
    app.get("/getTop", (req, res)=>{
        db.getTopFive((result) => {
            res.send(result);
        });
    });
    ////localhost:8000/getMe?id=1
    app.get("/getMe", (req, res)=>{
        var id = req.query.id;
        if(id === undefined){
            res.send({message:"error"});
            return;
        }
        db.getMyPosition(id, (result) => {
            res.send({position:result});
        });
    });
    ////localhost:8000/write?id=1&acc=1000
    app.get("/write", (req, res) => {
        var id = req.query.id;
        var accountBalance = req.query.acc;
        if(id === undefined || accountBalance === undefined){
            res.send({message:"error"});
            return;
        }
        db.updateMyAccount(id, accountBalance, (message)=>{
            res.send(message);
        });
    });
    ////localhost:8000/create?id=1&name=Stephaaan&accountBalance=1
    app.get("/create", (req, res) => {
        var id = req.query.id;
        var name = req.query.name;
        var acc = req.query.acc;
        if(id === undefined || name === undefined || acc === undefined){
            res.send({message:"error"});
            return;
        }
        db.createNewAccount(id,name,acc,(message)=>{
            res.send(message);
        });
    });
}

//export
module.exports = router;
