function media (cod, n1, n2, n3){
    var media = 0;

    if ((n1 > n2) && (n1 > n3)){
        media = (((n1*4) + (n2*3) + (n2*3))/10)
    }
    else if ((n2 > n1) && (n2 > n3)){
        media = (((n2*4) + (n1*3) + (n3*3))/10)
    }
    else{
        (((n3*4) + (n1*3) + (n2*3))/10)
    }
    if (media >= 5){
        console.log(`Aluno ${cod} nota 1: ${n1}, nota 2: ${n2}, nota 3: ${n3}, média: ${media} Aprovado`)
    }
    else{
        console.log(`Aluno ${cod} nota 1: ${n1}, nota 2: ${n2}, nota 3: ${n3}, média: ${media} Reprovado`)
    }
}

media(3008, 5, 9, 7)