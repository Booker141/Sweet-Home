import mongoose from 'mongoose';

const connection = () => {

    if(mongoose.connections[0].readyState != 0){
        console.log("DB already connected");
        return;
    }

    mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })

    mongoose.connection.on("connected", () => console.log("DB connected"));
    mongoose.connection.on("error", (err) => console.log("Error", err));

}

export default connection;