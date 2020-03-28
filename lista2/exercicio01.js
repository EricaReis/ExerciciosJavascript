function aumento(salario, plano){
    switch(plano){
        case "A":
            return salario * 1.1;
        case "B": 
            return salario * 1.15;
        case "C":
            return salario * 1.20;
        default:
            return "Plano inválido";
    }
}

console.log(aumento(1400, "A"))