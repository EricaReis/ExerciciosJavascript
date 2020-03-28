// Pedro joga N jogos de basquete por temporada. Para saber como ele está progredindo, ele mantém
// registro de todos os as pontuações feitas por jogo. Após cada jogo ele anota no novo valor e confere se o
// mesmo é maior ou menor que seu melhor e pior desempenho. Dada uma lista string = “pontuação1 pontuação2
// pontuação3 etc..”, escreva uma função que ao recebê-la irá comparar os valores um a um e irá retornar um
// vetor com o número de vezes que ele bateu seu recorde de maior número de pontos e quando fez seu pior
// jogo. (Número do pior jogo). Obs.: O primeiro jogo não conta como novo recorde do melhor.
// Exemplo:
// String: “10 20 20 8 25 3 0 30 1”
// Retorno: [3, 7] (Significa que ele bateu três vezes seu recorde de melhor pontuação e a pior pontuação aconte-
// ceu no sétimo jogo.)
function pedro(array) {
  let resposta = [];
  resposta[1] = 0;
  let record = 0;
  let maior = array[0];
  let pior = array[0];
  array.map((ponto, i) => {
    if (ponto > maior) {
      record += 1;
      maior = ponto;
    }
    if (ponto < pior) {
      resposta[1] = i + 1;
      pior = ponto;
    }
  });
  resposta[0] = record;
  return resposta;
}

console.log(pedro([10, 20, 20, 8, 25, 3, 0, 30, 1]));
