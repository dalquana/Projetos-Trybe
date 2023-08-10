const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('Verifica se ao passar argumentos Monday e 09:00-AM deve retornar a string "The zoo is closed"', () => {
    expect(getOpeningHours('monday', '09:00-AM')).toBe('The zoo is closed');
  });
  it('Verifica se ao passar argumentos Tuesday e 09:00-AM deve retornar a string "The zoo is open"', () => {
    expect(getOpeningHours('tuesday', '09:00-AM')).toBe('The zoo is open');
  });
  it('Verifica se ao passar argumentos Wednesday e 09:00-PM deve retornar a string "The zoo is closed"', () => {
    expect(getOpeningHours('wednesday', '09:00-PM')).toBe('The zoo is closed');
  });
  it('Verifica se ao não passar nenhum argumento retorna o objeto', () => {
    expect(getOpeningHours()).toStrictEqual({
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    });
  });
  it('Verifica se é uma função', () => {
    expect(typeof getOpeningHours).toBe('function');
  });
  test('Verifica se o dia é correto ', () => {
    expect(() => getOpeningHours('segunda', '10:00-AM')).toThrow('The day must be valid. Example: Monday');
  });
  test('Verifica se a hora é correta ', () => {
    expect(() => getOpeningHours('Monday', '13:00-AM')).toThrow('The hour must be between 0 and 12');
  });
  test('Verifica se o minuto é correto ', () => {
    expect(() => getOpeningHours('Monday', '12:70-AM')).toThrow('The minutes must be between 0 and 59');
  });
  test('Verifica se a hora é um number ', () => {
    expect(() => getOpeningHours('Monday', 'AB:00-AM')).toThrow('The hour should represent a number');
  });
  test('Verifica se a abreviação está correta ', () => {
    expect(() => getOpeningHours('Monday', '10:00-MN')).toThrow('The abbreviation must be \'AM\' or \'PM\'');
  });
});
