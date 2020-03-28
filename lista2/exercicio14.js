function percorre(vet){
    let maior = 0;
    let menor = 100;

    vet.map(e => {
        if (e > maior){
            maior = e;
        }
        if (e < menor){
            menor = e;
        }
    })
    console.log(`${menor} é o menor número do vetor e ${maior} é o maior número do vetor`)
}

percorre([1,2,3,4,5,6,7])