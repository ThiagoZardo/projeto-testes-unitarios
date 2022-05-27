const productDetails = require('../src/productDetails');

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    expect(typeof productDetails).toBe('function');
    const retorno = productDetails('Alcool gel', 'Máscara');
    expect(Array.isArray(retorno)).toBeTruthy();
    expect(retorno.length == 2).toBeTruthy();
    expect(typeof retorno === 'object').toBeTruthy();
    expect(retorno[0]!==retorno[1]).toBeTruthy();

    const retorno1 = retorno[0].details.productId;
    const retorno2 = retorno[1].details.productId;
    const final = (/.*123/); 
    expect(final.test(retorno1) && final.test(retorno2)).toBeTruthy();
  });
});
