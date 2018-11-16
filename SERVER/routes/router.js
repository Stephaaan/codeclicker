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
    app.post("/getMe", (req, res)=>{
        res.send({
            message:"TODO"
        });
    });
    app.post("/write", (req, res) => {
        res.send({
            message:"TODO"
        });
    });
}

//export
module.exports = router;
