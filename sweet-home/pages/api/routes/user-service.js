// Provisional

const Mongo = require('mongodb').MongoClient;
let db;	
let ObjectId = require('mongodb').ObjectID;
const User = function () {};	

Audience.prototype.connectDb = function (callback) {
	Mongo.connect("mongodb+srv://sergio:<FQOkTvkigLf4zlw2>@sweet-home-app.rsywk.mongodb.net/<dbname>?retryWrites=true&w=majority", {	//Conexion a la BD mediante el API Key de mongo
		useNewUrlParser: true,
		useUnifiedTopology: true
	}, function (err, database) {
		if (err) {
			callback(err);
		}
		db = database.db('sweet-home-app').collection('users');	//Especificamos la coleccion
		callback(err, database);
	});
};

// Get all endpoint db connection
User.prototype.getAll = function (callback) {
	return db.find({}).toArray(callback);
};

// Get one endpoint db connection
Audience.prototype.get = function (userId, callback) {
	return db.find({userId: ObjectId(userId)}).toArray(callback);
};

// Post endpoint db connection
Audience.prototype.add = function (person, callback) {
	return db.insertOne(person, callback);
};

// Put endpoint db connection
Audience.prototype.update = function (userId, updatedPerson, callback) {
	delete updatedPerson.userId;
	return db.updateOne({userId: ObjectId(userId)}, {$set: updatedPerson}, callback);
};

// Delete all endpoint db connection
Audience.prototype.removeAll = function (callback) {
	return db.deleteMany({}, callback);
};

// Delete one endpoint db connection
Audience.prototype.remove = function (userId, callback) {
	return db.deleteOne({userId: ObjectId(userId)}, callback);
};

module.exports = new User();