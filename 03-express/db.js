const Sequelize = require('sequelize')
const sequelize = new Sequelize('sistemadecadastro','root','123456',{
    host: 'localhost',
    dialect: 'mysql'
})

const Postagem = sequelize.define('postagens',{
    título:{
        type: Sequelize.STRING 
    },
    conteudo:{
        type: Sequelize.TEXT
    }
})

//Postagem.sync({force: true})
Postagem.create({titulo: "Um título qualquer", conteudo: "hfdklahfdajklaldfhl"})

const Usuario = sequelize.define('usuarios',{
    nome: {
        type: Sequelize.STRING
    },
    sobrenome: {
        type: Sequelize.STRING
    },
    idade: {
        type: Sequelize.INTEGER
    },
    email: {
        type: Sequelize.STRING
    }
})

//Usuario.sync({force: true})
Usuario.create({
    nome: "renan",
    sobrenome: "rwqkl",
    idade: 34,
    email: "fdjkaslfjkçlasfjç"
})

sequelize.authenticate().then(function(){
    console.log("Conectado com sucesso!")
}).catch(function(erro){
    console.log("Falha ao se conectar: "+erro)
})
