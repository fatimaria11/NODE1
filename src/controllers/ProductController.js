const ProductModel = require("../models/ProductModel")

const productCreate = async (req, res, next) => {
    try {
        const nome = req.body.nome
        const cor = req.body.cor
        const descricao = req.body.descricao

        const product = await ProductModel.create({
            nome: nome,
            cor: cor,
            descricao: descricao
        })

        res.send({
            'sucess': true,
            'message': `produto cadastrado com sucesso${product}`
        })
    } catch (error) {
        res.send({
            'sucess': false,
            'error': `erro na requisição: ${error}`
        })
    }
}

const productList = (req, res, next) => {
    console.log(req.body)
    try {
        const list = [
            {
                nome: 'tenis1',
                preco: 10,
                descricao: 'preto'
            }
        ]
        res.send(list)
    } catch (error) {
        res.send({
            'sucess': false,
            'error': `erro na requisição: ${error}`
        })
    }
}

module.exports = {
    productCreate, 
    productList
}