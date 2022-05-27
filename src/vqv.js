const vqv = (nome, idade) => {
  let nomes = nome;
  let idades = idade;
  const frase = `Oi, meu nome é ${nome}!
Tenho ${idade} anos,
trabalho na Trybe e mando muito em programação!
#VQV!`;

  if ((typeof nomes === 'undefined') || (typeof idades === 'undefined')) {
    return undefined;
  }

  return frase;
};

console.log(vqv('Thiago', 29));

module.exports = vqv;
