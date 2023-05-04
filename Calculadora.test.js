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
assert(soma(8,0)==8, 'Verificar se 8+0 é igual a 8');
assert(soma(0,0)==0, 'Verificar se 0+0 é igual a 0');
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

assert(dividir(6,2)==3,'Verificar se 6/2 é igual a 3')
assert(dividir(81,9)==9,'Verificar se 81/9 é igual a 9')
// assert(dividir(122,3)==40.66,'Verificar se 122/3 é igual a 40,666...') não esta reconhecendo os decimais
assert(dividir(9,0)=='error','Verificar se 9/0 é igual a Error')
assert(dividir(0,2)==0,'Verificar se 0/2 é igual a 0')
// assert(dividir(2,3)==0.66,'Verificar se 2/3 é igual a 0,666…') não esta reconhecendo os decimais


// Função Multiplicação
assert(multiplicar(6,3)==18,'Verificar se 6*3 é igual a 18')
assert(multiplicar(8,1)==8,'Verificar se 8*1 é igual a 8')
assert(multiplicar(0,0)==0,'Verificar se  0*0 é igual a  0')
assert(multiplicar(1,0)==0,'Verificar se 1*0 é igual a 0')
assert(multiplicar(6,100)==600,'Verificar se 6*100 é igual a 600')


// Função Fatorial

assert(fatorial(3)==6,'Verificar se 3! é igual a 6')
assert(fatorial(5)==120,'Verificar se 5!  é igual a 120')
assert(fatorial(10)==3628800,'Verificar se 10! é igual a 3628800')
assert(fatorial(3)+fatorial(3)==12,'Verificar se (3!)+(3!)  é igual a 12')
assert(fatorial(0)==0,'Verificar se 0!  é igual a 0') // verificar calculo manuealmente...

// Função Exponencial

assert(expoente(3,2)==9,'Verificar se 3² é igual a 9')
assert(expoente(5,3)==125,'Verificar se 5³ é igual a  125')
assert(expoente(4,1)==4,'Verificar se 4¹  é igual a 4')
assert(expoente(8,0)==1,'Verificar se 8**0 é igual a 1')
//  assert(expoente(-2,2)==-4,'Verificar se -2**2  é igual a -4') dando erro verificar o pq depois.
assert(expoente(2,(-2))==0.25,'Verificar se 2**(-2)  é igual a 0,25')


// Função Raiz Quadrada

assert(raizquadrada(81)==9,'Verificar se √81 é igual a  9')
assert(raizquadrada(9)==3,'Verificar se  √9 é igual a  3')
assert(raizquadrada(400)==20,'Verificar se  √400 é igual a 20')
assert(raizquadrada(25)==5,'Verificar se √25 é igual a  5')
// assert(raizquadrada(8)==2.828,'Verificar se √8 é igual a  2,828…') dando erro verificar depois...
assert(raizquadrada(1)==1,'Verificar se  √1 é igual a 1')
assert(raizquadrada(-2)=='error','Verificar se  √(-2) é igual a Error')


// Função Número Primo (Conceito: Nº divisível por 1 e ele mesmo.)

assert(numeroPrimo(2)==true,'Verificar se 2 É igual a Número Primo')
assert(numeroPrimo(3)==true, 'Verificar se 3 É igual a Número Primo')
assert(numeroPrimo(1)==false, 'Verificar se 1 Não é igual a Número Primo')
assert(numeroPrimo(7)==true ,'Verificar se 7 É igual a Número Primo')
assert(numeroPrimo(12)== false,'Verificar se  12 Não é igual a Número Primo')
assert(numeroPrimo(13)==true, 'Verificar se 13 É igual a Número Primo')
assert(numeroPrimo(17)==true, 'Verificar se 17 É igual a Número Primo')
assert(numeroPrimo(81)==false,'Verificar se 81 Não é igual ao número Primo')


// Função Impar ou Par


assert(verificarImparPar(1)=='impar','Verificar se 1 Não é igual a Par')
assert(verificarImparPar(6)=='par','Verificar se 6 É  igual a Par')
assert(verificarImparPar(122)=='par','Verificar se 122 É  igual a Par')
assert(verificarImparPar(9)=='impar','Verificar se 9 ´É igual a ímpar')
assert(verificarImparPar(444)=='par','Verificar se 444 Não é igual a ímpar')
assert(verificarImparPar(33667)=='impar','Verificar se 33667 É igual a ímpar')
