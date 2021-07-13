import mongoose from 'mongoose';

const postsSchema = new mongoose.Schema({

    id: {
        type: ObjectId,
        required: true
    },

    userImage: {
        type: String,
        required: true,
        default: "https://www.sogapar.info/wp-content/uploads/2015/12/default-user-image.png"
    },

    username: {
        type: String,
        required: true
    },

    location:{
        type: String,
        required: false
    },

    mediaUrl: {
        type: String,
        required: false
    },

    description: {
        type: String,
        required: true
    },

    comments: {
        type: Array,
        of: String
    }

})

export default mongoose.model.post || mongoose.model("post", postsSchema);