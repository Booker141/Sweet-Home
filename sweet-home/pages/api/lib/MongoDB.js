import { MongoClient } from 'mongodb'

if (!process.env.MONGODB_URI) {

  throw new Error('No se ha podido conectar a la base de datos');
  
}

const uri = process.env.MONGODB_URI;

let client;
let connectionDB;

if (process.env.NODE_ENV === 'development') {

  if (!global._mongoClientPromise) {
    client = new MongoClient(uri);
    global._mongoClientPromise = client.connect("SweetHomeDB");
  }

  connectionDB = global._mongoClientPromise;

} else {
  client = new MongoClient(uri);
  connectionDB = client.connect("SweetHomeDB");
}

export default connectionDB;
