/*  
Evite condições confusas e aninhadas,
Condições confusas dificultam a leitura do código. 
*/

// Exemplo ruim ❌
function validarPessoa(pessoa) {
  if (cpfValido(pessoa)) {
    if (pessoa.telefones) {
      if (pessoa.enderecos) {
        salvarPessoa(pessoa);
      } else {
        throw new Error('Pessoa deve ter pelo menos um endereço');
      }
    } else {
      throw new Error('Pessoa deve ter pelo menos um telefone');
    }
  } else {
    throw new Error('CPF Inválido');
  }
}

//Utilize early return / cláusula guarda para simplificar as condições.
// Exemplo bom ✅
function validarPessoaRefatorada(pessoa) {
  if (!cpfValido(pessoa))
    throw new Error("CPF Inválido.");
  if (!pessoa.telefones)
    throw new Error("Pessoa deve ter pelo menos um telefone.");
  if (!pessoa.enderecos)
    throw new Error("Pessoa deve ter pelo menos um endereço.");

  salvarPessoa(pessoa);
}















function cpfValido(pessoa) {
  return true;
}

function salvarPessoa(pessoa) {
  console.log('Pessoa salva');
}