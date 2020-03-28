function plano (idade){
        if((idade > 0) && (idade <= 10)){
        return 180;
        }
        if ((idade > 10) && (idade <= 30)){
        return 150;
        }
        if ((idade > 30) && (idade <= 60)){
        return 195;
        }
        if (idade > 60){
        return 230;
        }
        else{
        return "invalido";
        }
}

console.log(plano(40))