import User from "../../models/User"
import connection from "../../utils/DBconnection"

connection();
export default (req, res) => {
    User.find().then((users) => {
        res.status(200).json(users)
    })
}