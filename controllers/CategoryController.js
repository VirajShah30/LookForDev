 //const models.Category = require('../models/models.Category')
 const models = require('../models');
 const CategoryController = () =>
{
    const getCategory = async (req, res) => 
    {
        try {
            const category = await models.Category.findAll({
                where: {
                    status: 1,
                }
            })
            console.log(category);
            return res.status(200).json(
                    {
                        msg: 'Categories',
                        data: { category },
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
    return { getCategory }
}
module.exports = CategoryController;