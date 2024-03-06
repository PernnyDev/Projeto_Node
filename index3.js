const express = require("express");
const app = express();
const handlebars = require("Express-handlebars");
const Sequelize = require('sequelize');

//conexão com o banco de dados mysql

const sequelize = new Sequelize('projeto1','root','root',{
    host: "localhost",
    dialect: "mysql"
});

//configurando o motor das templates
//esse main carrega as configurações do html5 nas outras páginas

app.engine('handlebras', handlebars.engine({defaultLayout:'main'}));
app.set('view engine', 'handlebars');

//Rotas
//o metodo render só precisa do nome do arquivo do tipo handlebars
app.get('/cad',function(req,res){
    res.render('formulario');
} );

//quando o botão de form for apertado
//o método post manda para a rota add
//informando que os dados foram recebidos
app.post('/add', function(req,res){
    res.send("Formulário recebido")
});
app.listen(8081, function() {
    console.log("Servidor rodando na url http://localhost:8081")
});
