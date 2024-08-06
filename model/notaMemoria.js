// importação da classe Nota no arquivo "modelos.js"
var Nota = require("./modelos.js");

const lista_notas = []; //será um vetor de objetos do tipo Nota

class NotaMemoria {
  async atualiza(chave, titulo, importancia, texto, lida) {
    lista_notas[chave] = new Nota(chave, titulo, importancia, texto, lida);
    return lista_notas[chave];
  }

  async cria(chave, titulo, importancia, texto) {
    lista_notas[chave] = new Nota(chave, titulo, importancia, texto);
    return lista_notas[chave];
  }
  async consulta(chave) {
    if (lista_notas[chave]) return lista_notas[chave];
    else throw new Error(`Nota com a chave ${chave} não existe`);
  }
  async deleta(chave) {
    if (lista_notas[chave]) {
      delete lista_notas[chave];
    } else throw new Error(`Nota com a chave ${chave} não existe`);
  }
  async lista() {
    return Object.values(lista_notas);
  }
  async lista_chaves() {
    return Object.keys(lista_notas); //função que retorna a lista de chaves/índices do vetor
  }
  async qtd() {
    return lista_notas.length;
  }
}
// cria um objeto do tipo NotaMemoria que será utilizado para gerenciar as notas
var notas = new NotaMemoria();
module.exports = notas;
