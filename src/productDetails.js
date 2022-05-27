const productDetails = (firstProduct, secondProduct) => [
  {
    name: firstProduct,
    details: {
      productId: `${firstProduct}123`,
    },
  },
  {
    name: secondProduct,
    details: {
      productId: `${secondProduct}123`,
    },
  },
];
const retorno = productDetails('Alcool gel', 'Máscara');
const retorno1 = retorno[0].details.productId;
    const retorno2 = retorno[1].details.productId;
    // expect(productDetails(retorno1 === '123')).toBeTruthy();
    // expect(productDetails(retorno2 === '123')).toBeTruthy();
    console.log(retorno2);
    console.log(retorno1 === 123);
module.exports = productDetails;
