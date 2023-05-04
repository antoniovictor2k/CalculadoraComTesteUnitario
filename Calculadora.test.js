// Para Chamar o teste no node Utilizar (node .\Calculadora.test.js)
// Ass: Antonio!


const 
{soma, dividir, multiplicar,subtrair, 
expoente, verificarImparPar, raizquadrada, 
fatorial, numeroPrimo} 
= require("./funcoesLimpaParaTeste");

var assert = require('assert');

// Função somar

assert(soma(6,7)==13, 'Verificar se 6+7 é igual a 13');
assert(soma(0,2)==2, 'Verificar se 8+0 é igual a 8');
assert(soma(2,0)==2, 'Verificar se 0+0 é igual a 0');
assert(soma(1,-3)==-2, 'Verificar se 1(-3) é igual a -2');
assert(soma(500,300)==800, 'Verificar se 500+300 é igual a 800');
assert(soma(-700,500)==-200, 'Verificar se -700 + 500 tem que da 200');


// Função subtrair

assert(subtrair(5,5)==-0,'Verificar se 5-5 é igual a 0')
assert(subtrair(10,11)== -1,'Verificar se 10-11 é igual a -1')
assert(subtrair( (-33),22)== -55,'Verificar se -33-22 é igual a  -55')
assert(subtrair((-33) , 11)== -44,'Verificar se -33+11 é igual a -44')
assert(subtrair(-1,0)==-1,'Verificar se -1+0 é igual a -1')

// Função Dividir

// Função Multiplicação

// Função Fatorial

// Função Exponencial

// Função Raiz Quadrada

// Função Número Primo (Conceito: Nº divisível por 1 e ele mesmo.)

// Função Impar ou Par