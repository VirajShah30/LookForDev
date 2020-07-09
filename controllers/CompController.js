// const models.CompDetails = require('../models/Comp_details')
const models = require('../models');
const CompController = () => {
    const registerComp = async (req, res) => {
        const { body } = req;
        console.log('Body var', req.body);
        try {
            const comp = await models.CompDetails.create({
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
    const compDetails = async (req, res) => {
        try {
            const { body } = req;
            const comp = await models.CompDetails.findOne({
                where: {
                    user_id: body.user_id,
                }
            })
            console.log(comp);
            return res.status(200).json(
                    {
                        msg: 'Company Details',
                        data: { comp },
                        status: true
                    }
                )
        }
        catch (err) {
            return res.status(500).json({
                error: err
            })
        }
    }
    return { registerComp, compDetails }
}
module.exports = CompController;