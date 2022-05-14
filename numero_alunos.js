// Considere a quantidade de alunos presentes na sala, percorra do zero até o número total de alunos e retornar os seguintes resultados:

// Se o número for par, escreva 'par' e o número correspondente.

// Se o número for ímpar, escreva 'ímpar' e o número correspondente.

// Se o número for zero, escreva 'zero' e o número correspondente.



for ( var numAlunos = 0; numAlunos <=33; numAlunos++ ) {

    if( numAlunos == 0){
        console.log(" Número zero " + numAlunos );
    } else {
        if( numAlunos % 2 == 0){
            console.log( " Este numero é par - " + numAlunos);
        } else{
            console.log( " Este numero é impar - " + numAlunos);
        }
    }
}