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

app.engine('handlebars', handlebars.engine({defaultLayout:'main'}));
app.set('view engine', 'handlebars');

//configurando o body parser
const bodyParser = require('body-parser');
//usando o body parser
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


//Rotas
//o metodo render só precisa do nome do arquivo do tipo handlebars
app.get('/cad',function(req,res){
    res.render('formulario');
} );

//quando o botão de form for apertado
//o método post manda para a rota add
//informando que os dados foram recebidos
app.post('/add', function(req,res){
    res.send("Texto: "+req.body.titulo+"<br>"
     +"Conteudo: "+req.body.conteudo);
});


app.get('/formsoma', function(req,res){
    res.render('soma');}
);

function funcSoma(v1,v2){
    return parseInt(v1)+parseInt(v2);
}

function funcSubtrai(v1,v2){
    return parseInt(v1)-parseInt(v2);
}

app.post('/somar', function(req,res){
    res.send("O Resultado é: "+funcSoma(req.body.v1,req.body.v2));
});

app.post('/subtrai', function(req,res){
    res.send("O Resultado é: "+funcSubtrai(req.body.v1,req.body.v2));
});






app.listen(8081, function() {
    console.log("Servidor rodando na url http://localhost:8081")
});
