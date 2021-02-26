var { MongoClient}= require("mongodb");
var bcrypt = require("bcrypt");

var db=null;
async function connect(){

    if (db == null){
        var url = 'mongodb+srv://dbUser:<dbUser10!>@cluster0.zv5oe.mongodb.net/<cps888>?retryWrites=true&w=majority';
    var options = {
        useUnifiedTopology: true,
        
    };
    var connection = await MongoClient.connect(url,options);
    db = await connection.db("cps888");

    }
    return db;
    
}
//connect();

async function register(username){
    var conn = await connect();
    var existingUser = await conn.collection('users').findOne({username});

    if (existingUser!=null){    
        throw new Error ('User already exists!');
    }
    var SALT_ROUNDS = 10;
    var passwordHash = await bcrypt.hash(password, SALT_ROUNDS);
    
    await conn.collection('users').findOne({username0});

    if (user ==null){
        throw new Error('user does not exist1');
        }

        var valid = await bcrypt.compare(password)
}