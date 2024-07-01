const prompt = require('prompt-sync')();
    
         let numero = prompt('Digite um número: ');
        let aux;

        numero = numero.split("");

        for(let i = 0; i < numero.length; i++){
            for(let j = i + 1; j < numero.length; j++){
                if(numero[j] > numero[i]){
                    aux = numero[i];
                    numero[i] = numero[j];
                    numero[j] = aux;
                }
            }
        }

        //numero.jois = Join seria para juntar os elementos de uma Array.
numero = numero.join("");
console.log("O maior numero do seu algarismo é  " + numero);