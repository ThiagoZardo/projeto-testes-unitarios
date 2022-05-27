const calculator = (number1, number2) => {
  let a = number1;
  let b = number2;
  const objeto = {
    sum: Math.floor(a + b),
    mult: Math.floor(a * b),
    div: Math.floor(a / b),
    sub: Math.floor(a - b),
  };
  return objeto;
};

const arrayGenerator = (type, object) => {
  if (type === 'keys') {
    return Object.keys(object);
  } if (type === 'values') {
    return Object.values(object);
  } if (type === 'entries') {
    return Object.entries(object);
  }
};

module.exports = { calculator, arrayGenerator };
