const { add, divide, multiplication, subtraction } = require('../src/mathHelper');

describe('mathHelper', () => {

  describe('add()', () => {
    it('suma dos números positivos correctamente', () => {
      const a = 2, b = 3;
      const result = add(a, b);
      expect(result).toBe(5);
    });

    it('suma números negativos', () => {
      expect(add(-1, -4)).toBe(-5);
    });

    it('suma con cero no altera el valor', () => {
      expect(add(7, 0)).toBe(7);
    });
  });
describe('divide()', () => {
    it('devuelve el cociente correcto', () => {
      expect(divide(10, 4)).toBe(2.5);
    });

    it('lanza error al dividir entre cero', () => {
      expect(() => divide(5, 0)).toThrow('No se puede dividir entre cero.');
    });

    it('devuelve un número como resultado', () => {
      expect(typeof divide(9, 3)).toBe('number');
    });
  });

  describe('multiplication()', () => {
    it('multiplica dos números positivos', () => {
      expect(multiplication(3, 4)).toBe(12);
    });

    it('multiplicar por cero da cero', () => {
      expect(multiplication(99, 0)).toBe(0);
    });

    it('multiplica números negativos', () => {
      expect(multiplication(-3, -4)).toBe(12);
    });
  });

  describe('subtraction()', () => {
    it('resta dos números positivos', () => {
      expect(subtraction(10, 4)).toBe(6);
    });

    it('resta que da negativo', () => {
      expect(subtraction(2, 8)).toBe(-6);
    });

    it('resta con cero no altera el valor', () => {
      expect(subtraction(5, 0)).toBe(5);
    });
  });

});