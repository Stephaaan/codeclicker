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
    app.post("/write", (req, res) => {

    });
}

//export
module.exports = router;
