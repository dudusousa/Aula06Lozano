const app = require('./app');

app.set('port',7777); //escolha de uma porta padrão
const server = app.listen(app.get('port'), ()=>{
    console.log("servidor rodando na porta: " + server.address().port);
});