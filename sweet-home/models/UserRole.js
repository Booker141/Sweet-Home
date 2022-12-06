import mongoose from "mongoose";



const userRoleSchema = new mongoose.Schema({

    
    name: {
        type: String,
        required: true
    },

})

export default mongoose.models.userRole || mongoose.model("userRole", userRoleSchema);