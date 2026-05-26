function add(a, b) {
  return a + b;
}

function divide(a, b) {
  if (b === 0) throw new Error('No se puede dividir entre cero.');
  return a / b;
}

function multiplication(a, b) {
  return a * b;
}

function subtraction(a, b) {
  return a - b;
}

module.exports = { add, divide, multiplication, subtraction };