// Para Chamar o teste no node Utilizar (node .\Calculadora.test.js)
// Ass: Antonio!


const 
{soma, dividir, multiplicar,subtrair, 
expoente, verificarImparPar, raizquadrada, 
fatorial, numeroPrimo} 
= require("./funcoesLimpaParaTeste");

var assert = require('assert');

assert(soma(8,2)==10, ' 8 + 2 tem que da 10');
assert(soma(0,2)==2, '0 + 2 tem que da 2');
assert(soma(2,0)==2, '0 + 2 tem que da 2');
assert(soma(5000,3000)==8000, '5000 + 3000 tem que da 8000');
assert(soma(-500,600)==100, '-500 + 600 tem que da 100');
assert(soma(-700,500)==200, '-700 + 500 tem que da -200');
