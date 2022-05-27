/* eslint-disable max-len */
/* eslint-disable no-unused-vars */

const circle = require('../src/circle');

describe('4 - Implemente os casos de teste para a função `circle`', () => {
  it('Verifica se ao receber um raio, a função `circle` retorna um objeto contedos os valores esperados', () => {
    expect(circle(NaN)).toBeUndefined();
    expect(circle()).toBeUndefined();
    expect(typeof circle(2) === 'object').toBeTruthy();
    expect(Object.keys(circle(3)).length === 3).toBeTruthy();
    expect(circle(2)).toHaveProperty('circumference', 12.56);
    expect(circle(3)).toHaveProperty('area', 28.259999999999998);
    expect(circleReturn(circle(3))).toBeTruthy();
  });
});

const circleReturn = (obj) => {
  let objeto = obj;
  if((objeto.radius === 3) && (objeto.area === 28.259999999999998) && (objeto.circumference === 18.84)) {
    return true;
  }
  return false;
}
