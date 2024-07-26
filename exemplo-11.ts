/* Trate exceções da forma correta */

// Exemplo ruim ❌
function lerArquivo(caminho) {
  if (caminho === "") 
    console.error("Caminho do arquivo não informado");
  
  const arquivo = funcaoQueLeOArquivo(caminho);

  if (arquivo == null) 
    return null;
  
  return arquivo;
}

// EXEMPLO BOM 
function lerArquivoRefatorada(caminho) {
  if (caminho === "") 
    throw Error("Caminho do arquivo não informado");

  const arquivo = funcaoQueLeOArquivo(caminho);

  if (arquivo == null) 
    throw Error("Arquivo não encontrado");

  return arquivo;
}





















function funcaoQueLeOArquivo(caminho: string) {
  // lógica para ler o arquivo
}