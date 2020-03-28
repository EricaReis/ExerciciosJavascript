function vetorzin (vet){
    let par= 0;
    let impar = 0;
    vet.map(e => {
        if((e % 2) === 0){
            par++;
        }
        else{
            impar++;
        }
    })
    console.log(`Pares: ${par}, Impares: ${impar}`)
}

vetorzin([1, 2, 3, 4]);