//IMPORTANDO O MÓDULO EXPRESS
const express = require('express')
//APP RECEBE O EXPRESS
const app = express()
//PERMITE QUE O SERVIDOR ENTENDA JSON NO CORPO DAS REQUISIÇÕES
app.use(express.json())

//EXPORTAR ROTAS
const product = require('./routes/RouterProduct')
app.use('/product', product)

const user = require('./routes/RouterUser')
app.use('/user', user)

const login = require('./routes/RouterLogin')
app.use('/login', login)

const category = require('./routes/RouterCategory')
app.use('/category', category)

const img = require('./routes/RouterImg')
app.use('/img', img)

//SUBINDO O SERVIDOR NA PORTA 3000
const PORT = 3000
app.listen(PORT, () => {
    console.log(`o servidor está rodando na porta ${PORT}`)
})

//CRIADO UMA ROTA PARA A API
// app.post('/login', (req, res) => {
//   res.send('Hello World')
// })















// app.get('/estados', (req, res) => {
//     res.send({
//         'ceara': 10,
//         'bahia': 8,
//         'pernambuco':7.78,
//         'piaui': 6.4
//     })
//   })





// app.listen(PORT, () => {
//     console.log(`o servidor está rodando na porta ${PORT}`)
// })

// const jwt = require('jsonwebtoken')
// const token = jwt.sign({id:1, nome:'fulano'}, 'asdsdjfgfkjsd')

// const jwtVerify = (tokenUser) => {
//   const decoded = jwt.verify(tokenUser, 'asdsdjfgfkjsd')
//   return decoded
// }

// console.log(jwtVerify(token))

// CRIAR UMA ROTA PARA A API
// app.get('/home', (req, res) =>
// req.send({
//   'Ceara': 10,
//   'Piaui': 8
// }))   

