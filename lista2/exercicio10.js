function pares(){
    let cont = 1;

    while (cont <= 100){
        let resto = (cont % 2);
            if ( resto == 0){
                console.log(cont);
            }
        cont++;
    }
}

pares()