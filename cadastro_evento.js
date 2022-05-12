
var entrada = require("readline-sync");

var dataAtual = 13;
var dataEvento = parseFloat(entrada.question(" Qual dia deste mês acontece o evento ? "));

if(dataEvento > dataAtual){
    console.log( " Evento confirmado. ")
} else{
    console.log(" Data inválida. ")
}

var idade = parseFloat(entrada.question(" Qual é a sua idade ? "));

if(idade >= 18){
    console.log( " Você poderá ter acesso ao evento. ")
} else{
    console.log(" Infelizmente o cadastro não poderá ser realizado ")
}

var listaPalestrantes = parseFloat(entrada.question(" Acessar lista de participantes - Digite 1 / Próxima etapa - Digite 2 "));

if( listaPalestrantes == 1){
    console.log( " - Antônio Silva - Patrícia Andrade - Isabella Soares ")
} else{
    console.log(" Acessando lista de participantes ---> ")
}


var partcipantesCadastrados = 102;


if(partcipantesCadastrados > 100){
    console.log( " Infelizmente não há mais vagas. ")
} else{
    console.log(" Parabéns! Cadastro realizado com sucesso! ")
}

console.log(" Fim ")