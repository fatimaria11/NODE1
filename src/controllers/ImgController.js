const ImgModel = require("../models/ImgModel")

const ImgCreate = async (req, res, next) => {
    try {
        const product_id = req.body.product_id
        const enabled = req.body.enabled
        const path = req.body.path

        const img = await ImgModel.create({
            product_id: product_id,
            enabled: enabled,
            path: path
        })

        res.send({
            'sucess': true,
            'message': `imagem cadastrado com sucesso${img}`
        })
    } catch (error) {
        res.send({
            'sucess': false,
            'error': `erro na requisição: ${error}`
        })
    }
}

module.exports = {
    ImgCreate
}