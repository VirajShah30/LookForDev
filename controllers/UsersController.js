//const models = require('../models');
const jwt = require('jsonwebtoken');
const models = require('../models');
//const Users = require('../models/Users')
// const Dev = require('../models/Dev_Details');
// const Comp = require('../models/Comp_Details');

const UsersController = () => {
    const signin = async (req, res) => {
        //User Login
        try {
            const { body } = req;
            console.log(body);
            const user = await models.Users.findOne({
                where: {
                    email: body.email
                }
            })
            console.log(user);
            if (user.password == body.password) {
                console.log('password match', user.password, body.password);
                const accessToken = await jwt.sign(user.id, process.env.ACCESS_TOKEN_SECRET);
                console.log('token generated', accessToken);
                return res.status(200).json(
                    {
                        msg: 'User Found',
                        data: { user, accessToken },
                        status: true
                    }
                )
            }
            else {
                console.log('password did not match', user.password, body.password);
                return res.status(401).json(
                    {
                        msg: 'Password did not match',
                        data: {},
                        status: false
                    }
                )
            }
        }
        catch (err) {
            return res.status(500).json({
                error: err
            })
        }
    }
    const register = async (req, res) => {
        try {
            const { body } = req;
            console.log(' Reg Body var', body);
            const user = await models.Users.create({
                email: body.email,
                password: body.password,
                full_name: body.full_name,
                gender: body.gender,
                role: body.role,
                dob: body.dob,
                status: 1,
                user_avatar: '',
            });
            if (user) {
                return res.status(200).json({
                    msg: 'Success!',
                    data: user,
                    status: true
                })
            }
        }
        catch (err) {
            return res.status(500).json({
                err
            })
        }
    }

    const getUsers = async (req, res) => {
        try {
            const getusers = await models.Users.findAll({
                where: {
                    status: 1
                }, 
                include: [
                    {
                        model: models.DevDetails
                    },
                    {
                        model: models.CompDetails
                    }
                ]
            });
            console.log(getusers);
            return res.status(200).json(
                {
                    msg: 'All Users',
                    data: getusers ,
                    status: true
                }
            )
        }
        catch (err) {
            return res.status(500).json({
                error:"err" + err 
            })
        }
    }

    return { signin, register, getUsers }
    
}
module.exports = UsersController;