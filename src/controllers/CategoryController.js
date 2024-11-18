const CategoryModel = require('../models/CategoryModel')

const CategoryCreate = async (req, res, next) => {
    try{
        const name = req.body.name
        const slug = req.body.slug
        const use_in_menu = req.body.use_in_menu

        const category = await CategoryModel.create({
            name: name,
            slug: slug,
            use_in_menu: use_in_menu
        })

        res.send({
            'sucess': true,
            'message': `categoria cadastrada com sucesso${category}`
        })
        } catch (error) {
            res.send({
                'sucess': false,
                'error': `erro na requisição: ${error}`
            })
        }
}

module.exports = {
    CategoryCreate
}