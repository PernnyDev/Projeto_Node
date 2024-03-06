const Sequelize = require('sequelize');
const sequelize = new Sequelize('projeto1','root','root',{
    host: "localhost",
    dialect: "mysql"
});

//then é uma finção de callback
//ela é executada quand algum evento acontece
//que é sequelize.athenticate
sequelize.authenticate().then(function(){
    console.log("Conectando com sucesso")
}).catch(function(erro){
console.log("Falha ao se conectar")

})

const Postagem = sequelize.define('postagem', {
    titulo: {
        type: Sequelize.STRING
    },
    conteudo: {
        type: Sequelize.TEXT
    },
});

//Postagem.sync({force:true});

const Usuario = sequelize.define('usuario', {
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
    },
});

//Usuario.sync({force:true});

Usuario.create({
nome:"Vini",
sobrenome:"cius",
idade: 33,
email:"vini@cius.com"

});