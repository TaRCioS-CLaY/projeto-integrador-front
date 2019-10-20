/**
 *
 *
 * Troca o valor da chave passada como o primeiro parametro para o valor do segundo
 * @param {string} valorVelho  valor a ser trocado
 * @param {string} valorNovo valor que vai substituir o velho
 * @param {*} objeto o objeto que contem as chaves
 * @returns Retorna o objeto com o valor da chave trocada
 */
export function trocarValorKey(valorVelho,valorNovo, objeto){
    if (valorVelho === valorNovo) {
      return objeto
    }
    Object.defineProperty(objeto, valorNovo, Object.getOwnPropertyDescriptor(objeto, valorVelho));
      delete objeto[valorVelho];
  return objeto
  }