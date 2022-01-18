const productDetails = require('../src/productDetails');

/*
  Dadas duas strings que representam nomes de produtos, retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;
  Comportamento:
  productDetails('Alcool gel', 'Máscara') // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]
*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste se productDetails é uma função.
    expect(typeof productDetails).toBe('function');
    // Teste se o retorno da função é um array.
    const retorno = productDetails('Alcool gel', 'Máscara');
    expect(Array.isArray(retorno)).toBeTruthy();
    // Teste se o array retornado pela função contém dois itens dentro.
    expect(retorno.length == 2).toBeTruthy();
    // Teste se os dois itens dentro do array retornado pela função são objetos.
    expect(typeof retorno === 'object').toBeTruthy();
    // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
    expect(retorno[0]!==retorno[1]).toBeTruthy();
    // Teste se os dois productIds terminam com 123.
    const retorno1 = retorno[0].details.productId;
    const retorno2 = retorno[1].details.productId;
    const regex = (/.*123/); 
    expect(regex.test(retorno1) && regex.test(retorno2)).toBeTruthy();
  });
});
