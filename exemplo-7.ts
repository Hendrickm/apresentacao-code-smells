/*
Utilize o arquivo de constantes para salvar valores fixos, como textos, 
configurações da tela, etc.
Armazenar valores fixos em constantes facilita a manutenção e evita 
duplicação. 
*/

// Exemplo ruim ❌
function mostrarMensagemAlerta() {
  alert('Preencha os campos obrigatórios.');
}


// Crie um arquivo de constantes e utilize-o para armazenar valores fixos.
// Exemplo bom ✅
const MENSAGENS = {
  CAMPO_OBRIGATORIO: 'Preencha os campos obrigatórios'
}

function mostrarMensagemAlertaRefatorada() {
  alert(MENSAGENS.CAMPO_OBRIGATORIO);
}


















function mostrarMensagem() {}