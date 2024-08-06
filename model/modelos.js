// Neste arquivo serão definidos todos os modelos de dados da aplicação
class Nota {
  chave;
  titulo;
  importancia;
  texto;
  lida;

  constructor(chave, titulo, texto, importancia, lida = false) {
    this.chave = chave;
    this.titulo = titulo;
    this.texto = texto;
    this.importancia = importancia
    this.lida = lida;
  }
  
  get chave() {
    return this.chave;
  }
  get titulo() {
    return this.titulo;
  }
  get importancia() {
    return this.importancia;
  }
  get texto() {
    return this.texto;
  }
  get lida(){
    return this.lida
  }

  set titulo(novoTitulo) {
    this.titulo = novoTitulo;
  }
  set importancia(novaImportancia) {
    this.importancia = novaImportancia;
  }
  set texto(novoTextp) {
    this.texto = novoTextp;
  }
  set lida(novoStatus){
    this.lida = novoStatus;
  }
}
module.exports = Nota;
