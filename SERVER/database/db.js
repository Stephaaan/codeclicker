class Database{
    constructor(mongodb){
        this.mongodb = mongodb;
        this.address = "mongodb://localhost:27017/codeclicker"
    }
    getTopFive(callback){
        var toReturn = "";
        this.mongodb.connect( this.address, (err, db) => {
            if(err) throw err;
            var database = db.db("codeclicker");
            database.collection("players", (err, collection) => {
                collection.find().sort({accountBalance:-1}).limit(5).toArray((err, result)=>{
                    if(err) throw err;
                    callback(result);
                });
            });
            db.close();
        });
    }
}
module.exports = Database;
