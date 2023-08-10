const productDetails = require('../src/productDetails');
/*
  A função productDetails recebe duas strings que representam nomes de produtos, e retorna um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara')

  // Retorna:
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

  Escreva pelo menos cinco testes para essa função para garantir que a implementação de productDetails está correta.

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    // fail('Teste vazio!');
    // ESCREVA SEUS TESTES ABAIXO:
  });
    it('Verifica se productDetails é uma função',() => {
      expect(typeof productDetails).toBe('function')
    })
    it('Verifica se o retorno da função é um array', () => {
      expect(Array.isArray(productDetails('carro', 'moto'))).toBeTruthy();
    })
    it('Verifica se o array retornado pela função contém dois itens dentro', () => {
      expect(productDetails('a','b')).toHaveLength(2)
    })
    it('Verifica se os dois itens de dentro do array são objetos', () => {
      expect(typeof productDetails('carro', 'moto')[0]).toBe('object');
      expect(typeof productDetails('carro', 'moto')[1]).toBe('object');
    });
    it('Verifica se ao passar parâmetros diferentes entre si, os dois objetos também são diferentes entre si', () => {
      expect(productDetails('carro','moto'[0])).not.toStrictEqual(productDetails('carro','moto'[1]))
    })
    it('Verifica se os dois productId terminam com 123', () => {
      expect(productDetails('carro', 'moto')[0].details.productId.endsWith('123')).toBeTruthy()
      expect(productDetails('carro', 'moto')[1].details.productId.endsWith('123')).toBeTruthy()
    });

});
