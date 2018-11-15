class Database{
    constructor(mongodb){
        this.mongodb = mongodb;
    }
    getTopFive(){
        this.mongodb.connect("mongodb://Stephaaan:adgjmptw1747@ds163103.mlab.com:63103/codeclicker", (err, db) => {
            if(err) throw err;
            console.log("db created!");
            db.close();
        });
        return ({
            message:"top five"
        });
    }
}
module.exports = Database;
