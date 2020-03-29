var calculoCrescimento = function (alt1, tx1, alt2, tx2) {
    if (alt1 < alt2) {
        for (let i = 0; (alt1 < 220) || i < 100; i++) {
            if (alt1 > alt2){
                return `A primeira criança irá demorar ${i} anos para ultrapassar a segunda`;
            }
            alt1 += tx1;
            alt2 += tx2;
        }
        return 'A primeira criança nunca ficará mais alta do que a segunda.'
    } else if (alt2 < alt1) {
        for (let i = 0; (alt2 < 220) || i < 100; i++) {
            if (alt2 > alt1){
                return `A segunda criança irá demorar ${i} anos para ultrapassar a primeira`;
            }
            alt1 += tx1;
            alt2 += tx2;
        }
        return 'A segunda criança nunca ficará mais alta do que a primeira.'
    } else {
        return "As crianças possuem tamanhos iguais";
    }
}

console.log(calculoCrescimento(100, 5, 110, 3));
console.log(calculoCrescimento(120, 5, 110, 5));
console.log(calculoCrescimento(120, 4, 110, 5));
console.log(calculoCrescimento(90, 4, 90, 5));