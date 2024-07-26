/*
Evite criar funções complexas, longas e com muitas responsabilidades.
Funções longas são difíceis de entender e manter. 
*/

// Exemplo ruim ❌
function processarDados(dados) {
  if (dados.length === 0) 
    throw new Error("Nenhum dado encontrado");
  if (dados.some((dado) => dado.valor < 0)) 
    throw new Error('Valor negativo encontrado');
  if (dados.some((dado) => dado.valor > 100)) 
    throw new Error('Valor acima do máximo permitido');
  if (dados.some((dado) => dado.nome  === null))
    throw new Error("Nome não encontrado");

  const dadosFiltrados = dados.filter((dado) => dado.ativo && dado.publico);
  const dadosOrdenados = dadosFiltrados.sort((a, b) => a.valor - b.valor);
  
  const pessoas = dadosOrdenados.map((dado) => {
    return {
      nome: dado.nome,
      idade: dado.idade,
      salario: dado.valor,
      situacao: dado.ativo,
      privacidade: dado.publico,
    };
  });
  return pessoas;
}

/* Divida funções complexas em funções menores e mais gerenciáveis.
"AS FUNÇÕES DEVEM FAZER UMA COISA. DEVEM FAZÊ-LA BEM.
DEVEM FAZER APENAS ELA*/
// Exemplo bom ✅

function processarDadosRefatorada(dados) {
  validarDados(dados);
  const dadosTratados = tratarDados(dados);
  return converterDadosParaPessoas(dadosTratados);
}

function validarDados(dados) {
  if (dados.length === 0) 
    throw new Error("Nenhum dado encontrado");
  if (dados.some((dado) => dado.valor < 0))
    throw new Error("Valor negativo encontrado");
  if (dados.some((dado) => dado.valor > 100))
    throw new Error("Valor acima do máximo permitido");
  if (dados.some((dado) => dado.nome === null))
    throw new Error("Nome não encontrado");
}


function tratarDados(dados) {
  const dadosFiltrados = dados.filter((dado) => dado.ativo && dado.publico);
  const dadosOrdenados = dadosFiltrados.sort((a, b) => a.valor - b.valor);
  return dadosOrdenados;
}

function converterDadosParaPessoas(dados) {
  const pessoas = dados.map((dado) => {
    return {
      nome: dado.nome,
      idade: dado.idade,
      salario: dado.valor,
      situacao: dado.ativo,
      privacidade: dado.publico,
    };
  });
  return pessoas;

}