const answerPhone = require('../src/asyncJest');

describe('1 - O retorno do telefonema', () => {
  test('atende', () => (
    answerPhone(true).then((resolve) => {
      expect(resolve).toBe('Oi!');
    })
  ));

  test('ocupado', () => (
    answerPhone(false).catch((reject) => {
      expect(reject.message).toBe('Infelizmente não podemos atender...');
    })
  ));
});
