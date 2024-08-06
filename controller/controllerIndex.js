// importação da classe que gerencia as notas na memória
const notas = require('../model/notaMongo.js')
// cria e já exporta a função que será responsável pela tela principal
exports.tela_principal = async function(req, res){
    contexto = {
        titulo_pagina: "Gerenciador de Notas de Texto",
        notas: await notas.lista(),
    }
    // renderiza o arquivo index.hbs, dentro da pasta view

    res.render('index', contexto);
}

console.log(notas.qtd())

// cria e já exporta a função que será responsável pela tela sobre
exports.sobre = async function(req, res){
    contexto = {
        titulo_pagina: "Sobre o Aplicativo",
    }

    // renderiza o arquivo dentro da pasta view
    res.render('sobre', contexto);
}