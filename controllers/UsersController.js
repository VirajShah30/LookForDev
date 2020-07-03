const models = require('../models/');
const UsersController = () => {
    const signin = async(req, res) => {
        //User Login
        try{
            const { body } = req;
            const user = await User.findOne({
            where:{
            email : body.email
            }
        })
        console.log(user);
        if(user.password == body.password)
        {
            console.log('password match', user.password , body.password);
            const accessToken = jwt.sign( user.id , process.env.ACCESS_TOKEN_SECRET);
            console.log('token generated' , accessToken);
            return res.status(200).json(
            {
                msg: 'User Found',
                data: {user, accessToken},
                status: true
            }
            )
        }
        else
        {
            console.log('password did not match',user.password, body.password);
            return res.status(401).json(
            {
                msg: 'Password did not match',
                data : {},
                status: false
            }
            )
        }
        }
        catch(err)
        {
            return  res.status(500).json({
            err
            })
        }   
    }

    return { 
        signin
    }
}
module.exports = UsersController;