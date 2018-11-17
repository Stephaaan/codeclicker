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
        db.getMyPosition(id, (result) => {
            res.send({"position":result});
        });
    });
    app.get("/write", (req, res) => {
        var id = req.query.id;
        var accountBalance = req.query.acc;
        db.updateMyAccount(id, accountBalance, (message)=>{
            res.send(message);
        });
    });
}

//export
module.exports = router;
