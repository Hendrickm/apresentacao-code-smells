/* Remova código comentado 
Código comentado polui o código-fonte e pode causar confusão. */

// Exemplo ruim - Código comentado❌
function buscarDados() {
  // let dados = obterDadosDoServidor();
  let dados = obterDadosDoCache();
  return dados;
}

// Exemplo ruim - Comentário que pode ser código ❌
function calcularValorCorrida(hora, distancia) {
  // verifica se é horário noturno
  if (hora > 19 || hora < 6)
    return 2 * distancia;
  else
    return distancia * 1.5;
} 

// Exemplo ruim - Marcadores de posição ❌
function exibirDados(usuario) {
  //  ------- exibe os dados do usuário ----------
  validarDadosUsuario(usuario);

  // ------- cria o template do usuario -------
  const html = criarTemplateUsuario(usuario);

  // ------- exibe os dados do cliente -------
  const divCliente = document.getElementById("cliente");
  if (divCliente) 
    divCliente.innerHTML = html;
}


// Exemplo ruim - Comentário redudantes  ❌

// Classe que representa Pessoa
class Pessoa {
  // Nome da pessoa
  private nome;
  // Idade da pessoa
  private dataNascimento;

  // construtor padrão da classe
  constructor(nome, dataNascimento) {
    this.nome = nome;
    this.dataNascimento = dataNascimento;
  }

  // retorna a idade da pessoa
  calculaIdade() {
    return new Date().getFullYear() - this.dataNascimento.getFullYear();
  }
}

// Exemplo ruim - Piadas ou brincadeiras ❌
/* 
  quando esse função foi criada somente eu e Deus sabiamos o que 
  ela fazia agora só Deus sabe 
*/
function calculaImposto(order: any) {
  /*
    MUUUUUUITO CODIGO AQUI
  */
}






















function validarDadosUsuario(usuario) {
  console.log('Dados do usuário');
}


function exibeDadosUsuario(usuario) {
  console.log('Dados do usuário');
}

function obterDadosDoCache() {}

function criarTemplateUsuario(usuario): string {
  return ''
}