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
        var found = false;
        this.mongodb.connect(this.address, (err, db) => {
            if(err) throw err;
            var database = db.db("codeclicker");
            database.collection("players", (err, collection)=>{
                collection.find().sort({accountBalance: -1}).toArray((err, result)=>{
                    for(var i = 0, length = result.length; i < length; i++){
                        var element = result[i];
                        if(element.id === myId){
                            found = true;
                            break;
                        }
                        position++;
                    }
                    if(!found)
                    callback("not found");
                    else
                    callback(position);
                });
            });
        });

    }
    updateMyAccount(myId, accountBalance, callback){
        this.mongodb.connect(this.address, (err, db) => {
            if(err) throw err;
            var database = db.db("codeclicker");
            database.collection("players", (err, collection) => {
                accountBalance = parseInt(accountBalance);
                collection.update({"id": myId}, {$set:{"accountBalance":accountBalance}}, (err, count)=>{
                    if(count.result.nModified > 0){
                        callback({"message":"ok"});
                    }else{
                        callback({"message":"not modified (id not found or account balance is the same)"});
                    }
                });
            });
            db.close();
        });
    }
    createNewAccount(myId, name, accountBalance, callback){
        this.checkIfIdIsUsed(myId, (arg) => {
            if(arg){
                callback({message:"id used"});
            }else{
                this.mongodb.connect(this.address, (err, db) => {
                    if(err) throw err;
                    var database = db.db("codeclicker");
                    database.collection("players", (err, collection) => {
                        if(err) throw err;
                        accountBalance = parseInt(accountBalance);
                        collection.insertOne({"id":myId, "name": name, "accountBalance" : accountBalance}, (err, arg) => {
                            if(arg.result.ok > 0){
                                callback({message:"ok"});
                            }else{
                                callback({message:"error"});
                            }
                        });
                    });
                });
            }
        });
    }
    checkIfIdIsUsed(id, callback){
        this.mongodb.connect(this.address, (err, db)=>{
            if(err) throw err;
            var database = db.db("codeclicker");
            database.collection("players", (err, collection)=> {
                collection.find({"id":id}).toArray( (err, result) => {
                    if(result[0] !== undefined){
                        callback(true);
                    }
                    else{
                        callback(false);
                    }
                });
            });
            db.close();
        });
    }
}
module.exports = Database;
