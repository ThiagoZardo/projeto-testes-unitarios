const average = (array) => {
  let soma = 0;
  const valores = [];
  let media = 0;
  for (let i = 0; i < array.length; i += 1) {
    valores.push(array[i]);
    soma += Math.round(valores[i]);
    if ((typeof valores[i] !== 'number')) {
      return undefined;
    }
  }
  if (array.length === 0) {
    return undefined;
  }
    media = Math.round(soma / array.length);
    return media;
};
module.exports = average;
