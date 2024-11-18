const UserModel = require("../models/UserModel")

const userCreate = async (req, res, next) => {
    try {
        const firstname = req.body.firstname
        const surname = req.body.surname
        const email = req.body.email
        const password = req.body.password

        const bcrypt = require('bcrypt')
        const saltRound = 10 
        const hash = await bcrypt.hash(password, saltRound)


        const user = await UserModel.create({
            firstname: firstname,
            surname: surname,
            email: email,
            password: hash
        });

        res.status(201).send({
            'sucess': true,
            'message': `usuário cadastrado com sucesso${user}`
        })
    } catch (error) {
        res.status(400)
        res.send({
            'sucess': false,
            'error': `erro na requisição: ${error}`
        })
    }
}

const userList = (req, res, next) => {
    console.log(req.body)
    try {
        const user = [
            {
                nome: 'Maria',
                email: 'fatima@exemplo.com',
                senha: '123456'
            }
        ]
        res.send(user)
    } catch (error) {
        res.send({
            'sucess': false,
            'error': `erro na requisição: ${error}`
        })
    }
}

const userUpdate = async (req, res, next) => {
try{
    const id = req.params.id
    const user = await UserModel.update(req.body, {
        where: { id }
    })
    
    res.status(201).send({
        'sucess': true,
        'message': `Usuário alterado com sucesso! ID: ${user.id - user.name}`
    })

} catch (error) {
    res.send({
        'sucess': false,
        'message':`erro na requisicao ${error}` 
    })
}
}

const userDelete = async (req, res, next) => {
    try{
        const id = req.params.id
        const user = await UserModel.destroy({
            where: { id }
        })
        
        res.status(201).send({
            'sucess': true,
            'message': `Usuário deletado com sucesso! ID: ${user.id - user.name}`
        })
    
    } catch (error) {
        res.send({
            'sucess': false,
            'message':`erro na requisicao ${error}` 
        })
    }}

module.exports = {
    userCreate,
    userList,
    userUpdate,
    userDelete
}






























const email = 'david@exemplo.com.br'
const password = '123456'