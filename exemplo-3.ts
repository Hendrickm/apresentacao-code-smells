/* Evite funções com muitos parâmetros
Funções com muitos parâmetros são difíceis de usar e entender. */

// Exemplo ruim ❌
function buscarUsuario(nome, idade, email, endereco, telefone) {
  // faz alguma coisa...
}

// Use objetos como parâmetros para agrupar valores relacionados.
// Exemplo bom ✅
interface Pessoa {
  nome: string;
  idade: number;
  email: string;
  //...
}

function buscarUsuarioRefatorada(pessoa: Pessoa) {
  console.log(pessoa.nome)
  console.log(pessoa.idade)
}