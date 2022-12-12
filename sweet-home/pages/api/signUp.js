import bcrypt from 'bcrypt'
import Users from '../../models/User'

export default async function handler(req, res){

    const body = req.body;
    const userExist = await Users.findOneByEmail(body.email);

    if(userExist){
        res.status(200).json({message: 'Ya está registrado con este email'});
        return;
    }

    const salt = await bcrypt.genSalt(12);
    const hashPassword = await bcrypt.hash(body.password, salt);
    const user = new Users({email: body.email, name: body.name, lastName: body.lastName, username: body.username, password: hashPassword});
    await user.save();
    res.status(200).json({message: 'Registrado con éxito'});
}   