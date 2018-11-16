class Database{
    constructor(mongodb){
        this.mongodb = mongodb;
        this.address = "mongodb://localhost:27017/codeclicker"
    }
    getTopFive(callback){
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
    getMyPosition(myId, callback){
        var position = 1;
        this.mongodb.connect(this.address, (err, db) => {
            if(err) throw err;
            var database = db.db("codeclicker");
            database.collection("players", (err, collection)=>{
                collection.find().sort({accountBalance: -1}).toArray((err, result)=>{
                    for(var i = 0, length = result.length; i < length; i++){
                        var element = result[i];
                        if(element.id === myId){
                            callback(position);
                            break;
                        }
                        position++;
                    }
                });
            });
        });
    }
}
module.exports = Database;
