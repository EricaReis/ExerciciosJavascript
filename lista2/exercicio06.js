var calcular = function (mes, anuidade) {

    for (let i = 1; i < mes; i++) {
        anuidade = anuidade * 1.05;
    }
    return `Deverá ser pago R$${anuidade.toFixed(2).replace(".",",")}`;
}

console.log(calcular(1,1000));
console.log(calcular(2,1000));
console.log(calcular(3,1000));
console.log(calcular(4,1000));
console.log(calcular(5,1000));
console.log(calcular(6,1000));
console.log(calcular(7,1000));
console.log(calcular(8,1000));
console.log(calcular(9,1000));
console.log(calcular(10,1000));
console.log(calcular(11,1000));
console.log(calcular(12,1000));