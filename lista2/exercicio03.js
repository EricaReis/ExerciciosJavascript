function comanda (pedido, qtd){
    switch (pedido){
        case 100:
            return qtd * 3;
        case 200:
            return qtd * 4;
        case 300:
            return qtd * 5.5;
        case 400:
            return qtd * 7.5;
        case 500:
            return qtd * 3.5;
        case 600:
            return qtd * 2.8;
        default:
            return "Pedido inválido";
    }
}



console.log(Intl.NumberFormat("pt-Br", {style:"currency", currency:"BRL"}).format(comanda(100, 2)))