/*
Evite números mágicos
Números mágicos são valores numéricos sem contexto ou explicação.
*/

// Exemplo ruim ❌
function avaliarAluno(nota) {
  if (nota < 6.5) 
    return 'Reprovado';
  
  return 'Aprovado';
  
}

// Utilize constantes nomeadas para dar contexto aos valores.
// Exemplo bom ✅
function avaliarAlunoRefatorada(nota) {
  const mediaParaAprovacao = 6.5;
  return nota < mediaParaAprovacao
    ? 'REPROVADO'
    : 'APROVADO'
}