const cors = require('cors');
//Importa a instância do Express configurada em index.js
const app = require("./index");
//Inicia o servidor na porta 5000, tornando a API acessível em http://localhost:5000
app.listen(5000);
app.use(cors(corsOptions));

const corsOptions = {
    origin: '*', //Substitua pela origem permitida
    methods:'GET, HEAD, PUT, PATCH, POST, DELETE', //Métodos HTTP permitidos
    credentials: true, //Permite o uso de cookies e credencias
    optionsSucessStatus: 204, // Define o status de resposta para o metodo OPTIONS
};