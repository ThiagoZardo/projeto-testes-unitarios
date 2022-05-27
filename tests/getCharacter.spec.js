/* eslint-disable max-len */
/* eslint-disable no-unused-vars */

const getCharacter = require('../src/getCharacter');

describe('9 - Implemente os casos de teste da função `getCharacter`', () => {
  it('Verifica se a função `getCharacter` retorna o objeto do personagem corretamente.', () => {
    expect(getCharacter('')).toBeFalsy();
    const retornoArya = getCharacter('Arya');
    expect(retornoArya.name === 'Arya Stark' && retornoArya.class === 'Rogue' && retornoArya.phrases[0] === 'Not today' && retornoArya.phrases[1] === 'A girl has no name.').toBeTruthy();

    const retornoBrienne = getCharacter('Brienne');
    expect(retornoBrienne.name === 'Brienne Tarth' && retornoBrienne.class === 'Brienne Tarth' && retornoBrienne.phrases[0] === 'Im No Lady, Your Grace.' && retornoBrienne.phrases[1] === 'I, Brienne Of Tarth, Sentence You To Die.');
    const retornoMelissandre = getCharacter('Melissandre');
    expect(retornoMelissandre.name === 'Melissandre' && retornoMelissandre.class === 'Necromancer' && retornoMelissandre.phrases[0] === 'Death By Fire Is The Purest Death.' && retornoMelissandre.phrases[1] === 'For The Night Is Dark And Full Of Terrors.');

    const retornoSensitive = getCharacter();
    expect(getCharacter('AryA')).toEqual({"class": "Rogue", "name": "Arya Stark", "phrases": ["Not today", "A girl has no name."]}); 
    expect(getCharacter('ArYa').name).toBe('Arya Stark');
    expect(getCharacter('Thiago')).toBe(undefined);
  });
});
