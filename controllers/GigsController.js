//const gig = require('../models/models.models.Gigs');
const models = require('../models');
const GigsController  = () => 
{
    const addGigs = async (req, res) => {
        const { body } = req;
        console.log('Body var', body);
        try {
            const gig = await models.Gigs.create({
                title:body.title,
                category_id: 1,
                comp_id:body.comp_id,
                desc:body.desc,
                budget:body.budget,
                status:'1'
            });
            if (gig) return res.status(200).json({
                msg: 'Success!',
                data: gig,
                status: true
            })
        }
        catch (err) {
            console.log(err)
            return res.status(500).json({
                error:'err'+ err
            })
        }
    }
    const getCompGigs = async (req, res) => {
        try{
            const { body } = req;
            console.log('body var', body);
            const gig = await models.Gigs.findAll({
                where: {
                    comp_id:body.comp_id,
                }
            })
            console.log(gig);
            return res.status(200).json(
                {
                    msg: 'Companymodels.models.Gigs',
                    data:  gig ,
                    status: true
                }
            )
        }
        catch(err){
            return res.status(500).json({
                'error' : err
            })
        }
    }
    const getDevGigs = async (req, res) => {
        try{
            const { body } = req;
            const gig = await models.models.Gigs.findAll({
                where: {
                    category_id:body.category_id,
                }
            })
            console.log(gig);
            return res.status(200).json(
                {
                    msg: 'Devloper CategoryGigs',
                    data: gig ,
                    status: true
                }
            )
        }
        catch(err){
            return res.status(500).json({
                err
            })
        }
    }
    return { addGigs,getCompGigs,getDevGigs }
}
module.exports = GigsController;