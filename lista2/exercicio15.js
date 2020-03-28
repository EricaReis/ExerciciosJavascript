function negativos(vet){
    neg = 0;

    vet.map(e => {
        if(e < 0){
            neg++; 
        }
    })
    console.log(`${neg} número(s) negativo(s)`)
}

negativos([1,2,-1,0])