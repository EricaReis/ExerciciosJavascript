function cedulas(valor){
    let resto = valor 
    let cem = 0
    let cinquenta = 0
    let dez = 0 
    let cinco = 0
    let um  = 0

    if (resto > 100){
        cem = parseInt(resto/100)
        resto = resto % 100
        console.log(`${cem} notas de R$100,00`)
    }
    if (resto > 50){
        cinquenta = parseInt(resto/50)
        resto = resto % 50
        console.log(`${cinquenta} notas de R$50,00`)
    }
    if (resto > 10){
        dez = parseInt(resto/10)
        resto = resto % 10
        console.log(`${dez} notas de R$10,00`)
    }
    if (resto > 5){
        cinco = parseInt(resto/5)
        resto = resto % 5
        console.log(`${cinco} notas de R$5,00`)
    }
    if (resto > 1){
        um = parseInt(resto/1)
        resto = resto % 1
        console.log(`${um} notas de R$1,00`)
    }
}

cedulas(140)

