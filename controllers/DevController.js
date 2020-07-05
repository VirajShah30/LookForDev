const Dev = require('../models/Dev_Details')
const DevController = () =>
{
    const registerDev = async (res, req) => 
    {
        const { body } = req;
        console.log('Body var',req.body);
        try{
          const dev = await Dev.create({
            user_id: body.user_id,
            des: body.des,
            achievement: body.achievement,
            resume_link: ' ',
            experience: body.experience,
            linkedin_link: body.linkedin_link,
            twitter_link: body.twitter_link,
            facebook_link: body.facebook_link,
            status:'1',
            category_id:'1',
          });
          if (dev) return res.status(200).json({
            msg: 'Success!',
            data: dev,
            status: true
          })
        }
        catch(err)
        {
          return  res.status(500).json({
            err
          })
        }
    }

    return { registerDev }
}
module.exports = DevController;