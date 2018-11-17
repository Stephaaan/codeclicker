//app = parameter
const router = function(app, db){
    app.get("/", (req, res) => {
        res.send({
            message:"not specified"
        });
    });
    app.get("/getTop", (req, res)=>{
        db.getTopFive((result) => {
            res.send(result);
        });
    });
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
