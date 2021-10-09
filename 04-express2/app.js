const express = require("express");
const app = express();
const handlebars = require('express-handlebars')

const Sequelize = require('sequelize')

//Config
    //Template Engine
    app.engine('handlebars',handlebars({defaultLayout: 'main'}))
    app.set('view engine','handlebars')
// Conexão com o banco de dados MySql
        const sequelize = new Sequelize('sistemadecadastro', 'root', '123456',{
            host: "localhost",
            dialect: 'mysql'
        })

        app.get('/cad',function(req, res){
            res.render('formulario')
        })

        app.post('/add',function(req, res){
            res.send('formulario recebido')
        })

app.listen(8081,function(){
    console.log("Servidor Rodando na url http://localhost:8081");
});
