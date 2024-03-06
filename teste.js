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