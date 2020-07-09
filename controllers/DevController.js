//const models.DevDetails = require('../models/Dev_Details')
const models = require('../models');
const DevController = () =>
{
    const registerDev = async (req, res) => 
    {
        const { body } = req;
        console.log('Body var',req.body);
        try{
          const dev = await models.DevDetails.create({
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
    const devDetails = async (req, res) => {
      try {
          const { body } = req;
          const dev = await models.DevDetails.findOne({
              where: {
                  user_id: body.user_id,
              }
          })
          console.log(comp);
          return res.status(200).json(
                  {
                      msg: 'Developer Details',
                      data: { dev },
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
    return { registerDev,devDetails }
}
module.exports = DevController;