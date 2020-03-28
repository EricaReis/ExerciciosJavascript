// Utilizando a estrutura do Switch faça um programa que simule uma calculadora básica . O programa recebe
// como parâmetros dois valores numéricos e uma string referente à operação e a realize com os valores numéri-
// cos na ordem que foram inseridos. Por exemplo: calculadora (2, ‘+’, 3). A função efetuará a soma de 2 e
// 3. Dica: Os sinais das operações são: ‘+’. ‘-’, ‘*’ e ‘/’. Crie um caso default para operações inválidas.
function calculadora(a, operador, b) {
  switch (operador) {
    case "+":
    case "somar":
      return `${a}+${b} = ${a + b}`;
    case "-":
    case "subtrair":
      return `${a}-${b} = ${a - b}`;
    case "*":
    case "multiplicar":
      return `${a}*${b} = ${a * b}`;
    case "dividir":
    case "/":
      return `${a}/${b} = ${a / b}`;
    default:
      return "Operação inválida";
      break;
  }
}

console.log(calculadora(10, "dividir", 5));
