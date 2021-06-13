// Provisional

const Mongo = require('mongodb').MongoClient;
let db;	
let ObjectId = require('mongodb').ObjectID;
const User = function () {};	

User.prototype.connectDb = function (callback) {
	Mongo.connect("mongodb+srv://sweethome:sweethome@sweet-home-app.rsywk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {	//Conexion a la BD mediante el API Key de mongo
		useNewUrlParser: true,
		useUnifiedTopology: true
	}, function (err, database) {
		if (err) {
			callback(err);
		}
		db = database.db('sweethomedb').collection('users');	//Especificamos la coleccion
		callback(err, database);
	});
};

// Get all endpoint db connection
User.prototype.getAll = function (callback) {
	return db.find({}).toArray(callback);
};

// Get one endpoint db connection
User.prototype.get = function (userId, callback) {
	return db.find({userId: ObjectId(userId)}).toArray(callback);
};

// Post endpoint db connection
User.prototype.add = function (person, callback) {
	return db.insertOne(person, callback);
};

// Put endpoint db connection
User.prototype.update = function (userId, updatedPerson, callback) {
	delete updatedPerson.userId;
	return db.updateOne({userId: ObjectId(userId)}, {$set: updatedPerson}, callback);
};

// Delete all endpoint db connection
User.prototype.removeAll = function (callback) {
	return db.deleteMany({}, callback);
};

// Delete one endpoint db connection
User.prototype.remove = function (userId, callback) {
	return db.deleteOne({userId: ObjectId(userId)}, callback);
};

module.exports = new User();