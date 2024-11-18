const UserModel = require("../models/UserModel")

const UserCreateValidation = (req, res, next) => {
    try {

        const { firstname, surname, email, password } = req.body

        const user = UserModel.findOne({
            where: { email }
        })

        if (!firstname || !surname || !email || !password){
            const message = 'firstname, surname, email e password são obrigatórios!'
            return res.status(400).json({
                sucess: false,
                message: message
            })
        }else if(user){
            return res.status(400).json({
                sucess: false,
                message:`Email já cadastrado`
            })
        }
        next()
    } catch (error) {
        return res.status(400).json({
            sucess: false,
            message: `Erro: ${error}`
        })
    }
}

module.exports = {
    UserCreateValidation 
}