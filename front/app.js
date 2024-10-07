//Acessa o objeto "Document" que representa a página html

const { json } = require("body-parser");
const { application } = require("express");

//Seleciona o elemento com o id indicado formulário
document
    .getElementById("formulario-registro")
    //adiciona o ouvint de evento(submit) para capturar o envio do formulário
    .addEventListener("submit", function(event){
    //previne o comportamento padrao do formulario, ou seja, impede que ele seja enviado e recarregue a página
    event.preventDefault();

    //Captura os valores dos campos do formulario
    const name = document.getElementById("nome");
    const cpf = document.getElementById("cpf");
    const email = document.getElementById("email;");
    const password = document.getElementById("senha");

    //Requisição HTTP para o endpoint de cadastro de usuário
    fetch("http://localhost:5000/api/v1/user", {
        //Realiza uma chamada HTTP para o servidor (A ROTA DEFINIDA)
        method:"POST",
        headers: {
            //A requisição será em formato Json
            "Content-Type":application/json,
        },
        //Transforma os dados do formulario em uma string json para serem enviados no corpo da requisição 
        body: JSON.stringify({name, cpf, password, email}),

    })
    })