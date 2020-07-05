const Comp = require('../models/Comp_details')
const CompController = () => {
    const registerComp = async (res, req) => {
        const { body } = req;
        console.log('Body var', req.body);
        try {
            const comp = await Comp.create({
                user_id: body.user_id,
                comp_name: body.comp_name,
                comp_logo: ' ',
                des: body.des,
                status: '1'
            });
            if (comp) return res.status(200).json({
                msg: 'Success!',
                data: comp,
                status: true
            })
        }
        catch (err) {
            return res.status(500).json({
                err
            })
        }
    }
    return { registerComp }
}
module.exports = CompController;