// Crie uma estrutura condicional switch que receba uma string com o nome de uma fruta e que possua três
// casos: Caso maçã, retorne no console: “Não vendemos esta fruta aqui”. Caso kiwi, retorne: “Estamos com es-
// cassez de kiwis”. Caso melancia, retorne: “Aqui está, são 3 reais o quilo”. Teste com estas três opções .Crie
// também um default, que retornará uma mensagem de erro no console.
function feira(fruta) {
  switch (fruta) {
    case "maçã":
      return "Não vendemos esta fruta aqui";
      break;
    case "kiwi":
      return "Estamos com escassez de kiwis";
      break;
    case "melancia":
      return "Aqui está, são 3 reais o quilo";
    default:
      return "mensagem de erro no console";
      break;
  }
}

console.log(feira("maçã"));
console.log(feira("kiwi"));
console.log(feira("melancia"));
console.log(feira("pregos"));
