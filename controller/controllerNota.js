// importação da classe que gerencia as notas na memória
const notas = require("../model/notaMongo.js");

// cria e já exporta a função que será responsável pela criação de nota
exports.cria_get = async function (req, res) {
    contexto = {
        titulo_pagina: "Criação de Nota",
    };
    // renderiza o arquivo dentro da pasta view
    res.render("criaNota", contexto);
};

// cria e já exporta a função que será responsável pela criação de nota
exports.cria_post = async function (req, res) {
    // obtem as informações do formulário
    var chave = req.body.chave;
    var titulo = req.body.titulo;
    var texto = req.body.texto;
    var importancia = req.body.importancia;

    // cria a nota nota
    await notas.cria(chave, titulo, texto, importancia);

    // redireciona para a página principal
    res.redirect("/");
};

exports.cria_teste = async function(req, res){
    let titulo = "Nota de Teste ";
    let texto = "Nota para testar funcionalidades da aplicação."

    for (let i = 1; i < 5; i++) {
        await notas.cria("t"+i, titulo + i, i, texto); 
    }

    res.redirect('/');
}

// cria e já exporta a função que será responsável pela consulta a nota
exports.consulta = async function (req, res) {
    //informação passada como parâmetro na url
    var chave = req.params.chave_nota;
    var nota = await notas.consulta(chave);
    nota.lida = true;
 
    //atualização no banco de dados
    await notas.atualiza(nota.chave, nota.titulo, nota.texto, nota.importancia, nota.lida)
    
    contexto = {
        titulo_pagina: "Consulta a Nota",
        chave: nota.chave,
        titulo: nota.titulo,
        importancia: nota.importancia,
        texto: nota.texto,
    };
    // renderiza o arquivo dentro da pasta view
    res.render("consultaNotas", contexto);
};

exports.altera_get = async function (req, res) {
    var chave = req.params.chave_nota;
    var nota = await notas.consulta(chave);

    contexto = {
        titulo_pagina: "Altera Nota",
        chave: nota.chave,
        titulo: nota.titulo,
        importancia: nota.importancia,
        texto: nota.texto,
        lida: nota.lida,
    };

    res.render("alteraNota", contexto);
};

exports.altera_post = async function (req, res) {
    var nota = req.body

    if(req.body.status == "on"){
        nota.lida = true
        delete nota.status // deleta este atributo para ele não ser armazenado em BD
    }
    else{
        nota.lida = false
    }

    await notas.atualiza(nota);

    res.redirect('/');
};

exports.deleta = async function (req, res) {
    var chave = req.params.chave_nota;
    await notas.deleta(chave);

    res.redirect("/");
};

//cria e já exporta a função que será responsável pela alteração do status da nota para lida
exports.lida = async function (req, res) {
    var chave = req.params.chave_nota;
    var nota = await notas.consulta(chave);
    nota.lida = true;

    //atualização no banco de dados
    await notas.atualiza(nota.chave, nota.titulo, nota.texto, nota.importancia, nota.lida)


    // redireciona para a página principal
    res.redirect("/");
};

//cria e já exporta a função que será responsável pela alteração do status da nota para não lida
exports.naolida = async function (req, res) {
    var chave = req.params.chave_nota;
    var nota = await notas.consulta(chave);
    nota.lida = false;

    //atualização no banco de dados
    await notas.atualiza(nota.chave, nota.titulo, nota.texto, nota.importancia, nota.lida)


    // redireciona para a página principal
    res.redirect("/");
};
