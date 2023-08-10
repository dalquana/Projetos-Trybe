const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Verifica se o argumento count retorna o número inteiro 4', () => {
    expect(handlerElephants('count')).toBe(4);
  });
  it('Verifica se o argumento names retorna um array de nomes que possui o nome jefferson', () => {
    const result = handlerElephants('names');
    expect(result).toContain('Jefferson');
  });
  it('Verifica se o argumento Avarege deve retornar um número próximo a 10,5', () => {
    expect(handlerElephants('averageAge')).toEqual(10.5);
  });
  it('Verifica se a função é case sensitive', () => {
    expect(handlerElephants('elephant')).toStrictEqual(handlerElephants('Elephant'));
  });
  it('verifica se quando não houver parâmetros na função retorne undefined', () => {
    expect(handlerElephants(undefined)).toBeUndefined();
  });
  it('Verifica se o parâmetro não for uma string retorne uma mensagem', () => {
    expect(handlerElephants(123)).toBe('Parâmetro inválido, é necessário uma string');
  });
  it('Verifica se o argumento location retorna a string NW', () => {
    expect(handlerElephants('location')).toMatch('NW');
  });
  it('Para o argumentoo popularity deve retornar um número igual ou maior a 5', () => {
    expect(handlerElephants('popularity')).toBeGreaterThanOrEqual(5);
  });
});
