// Elabore duas funções que recebem três parâmetros:
// capital inicial, taxa de juros e tempo de aplicação.
// A primeira função retornará o montante da aplicação
// financeira sob o regime de juros simples e a segunda
// retornará o valor da aplicação sob o regime de juros compostos.
function jurosSimples(capitalInicial, taxaDeJuros, tempoDeAplicacao) {
  let capital = capitalInicial;
  for (let i = 0; i < tempoDeAplicacao; i++) {
    capital += capitalInicial * (taxaDeJuros / 100);
  }
  return capital;
}

function jurosComposto(capitalInicial, taxaDeJuros, tempoDeAplicacao) {
  for (let i = 0; i < tempoDeAplicacao; i++) {
    capitalInicial += capitalInicial * (taxaDeJuros / 100);
  }
  return capitalInicial;
}

console.log(jurosSimples(100, 5, 5));
console.log(jurosComposto(100, 5, 5));
