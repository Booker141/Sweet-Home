import Post from "../../models/Post"
import connection from "../../utils/DBconnection"

connection();
export default (req, res) => {
    Post.find().then((posts) => {
        res.status(200).json(posts)
    })
}

