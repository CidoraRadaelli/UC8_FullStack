// Se a peça possuir um peso supeiror a 100 gramas, pode cadastrar.
// Dada a capacidade da caixa, caso alista de peças seja superior a 10, imprimir uma mensagem informando não ter capacidade suficiente.
// Caso a peça tenha um nome com quantidade inferior a 3 caracteres, informe uma mensagem de erro.


var nomePeça = "Chave de Fenda";
var pesoPeça = 130;
var listaPeça = 12;



if(nomePeça.length <3){
    console.log( " Peça não encontrada. Digite novamente. ")
} else{
    console.log(" Peça encontrada! ")
}


if(pesoPeça >= 100){
    console.log( " A peça poderá ser cadastrada. ")
} else{
    console.log(" Peça com peso insuficiente. ")
}


if(listaPeça >10){
    console.log( " Capacidade insufciente para o número de peças. ")
} else{
    console.log(" Lista aprovada. ")
}