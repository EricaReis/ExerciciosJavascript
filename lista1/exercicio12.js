// Faça um algoritmo que calcule o fatorial de um número.
function fatorial(num) {
  let result = num;
  if (num < 2) {
    return 1;
  }
  for (num; num > 1; num--) {
    result *= num - 1;
  }
  return result;
}

console.log(fatorial(5));
