import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config();


/**
 * If the database is already connected, do nothing. If it's not connected, connect to it
 * @returns Nothing is being returned.
 */
export default function DBconnection(){

    if (mongoose.connections[0].readyState){
        return;
    }

    mongoose.connect(process.env.MONGODB_URI, {}, error => {if(error) throw error;})
    

}