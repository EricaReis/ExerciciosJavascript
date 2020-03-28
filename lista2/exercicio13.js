function dezvinte(vet){
        let dentro = 0;
        let fora = 0;

        vet.map(e => {
         if((e >= 10) && (e <= 20)){
            dentro++;
         }
         else{
             fora++;
         }
        })
        console.log(`${dentro} números estão dentro da faixa e ${fora} estão fora da faixa`)
}

dezvinte([10, 6, 7, 15, 8, 9])