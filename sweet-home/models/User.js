import mongoose from "mongoose";



const usersSchema = new mongoose.Schema({

    
    name: {
        type: String,
        required: true
    },

    lastName: {
        type: String,
        required: true
    }, 

    username: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    }, 

    email: {
        type: String,
        required: true
    }, 

    phone: {
        type: String,
        required: false
    }, 

    gender:{
        type: String,
        required: true
    },

    birthdate: {
        type: Date,
        required: true
    },

    mediaUrl: {
        type: String,
        required: false
    }
})

export default mongoose.models.user || mongoose.model("user", usersSchema);