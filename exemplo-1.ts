/*
Evite nomear funções e variáveis com nomes sem significado 
ou abreviações
Nomes sem significado ou abreviações dificultam o entendimento 
do código.
*/

// Exemplo ruim ❌
function calcValDesc(val, p) {
  const des = (val * p) / 100;
  return val - des;
}

/*Utilize nomes descritivos que expliquem claramente o 
propósito da função ou variável.*/
// Exemplo bom ✅
function calcularValorComDesconto(valor: number, percentual: number) {
  const desconto = (valor * percentual) / 100;
  return valor - desconto;
}  