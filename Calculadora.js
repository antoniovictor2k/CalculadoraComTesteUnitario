var numero1 = document.getElementById('numero1');
var numero2 = document.getElementById('numero2');
var resultadoDoCalculo = document.getElementById('resultadoDoCalculo');


console.log('Antes da Somar');
function soma(a, b) {
    var a = Number( numero1.value);
    var b = Number( numero2.value);
    console.log('Durante a Somar')
    console.log(a+b);
    return resultadoDoCalculo.innerHTML= a + b 
    
};
console.log('Depois da somar');
console.log('Antes da Subtração');
function subtrair(a, b) {
    var a = Number( numero1.value);
    var b = Number( numero2.value);
    console.log(a-b);
    return resultadoDoCalculo.innerHTML= a - b 

};
subtrair(5, 5);
console.log('Depois da Subtração');

console.log('Antes da Multiplicação');
function multiplicar(a, b) {
    var a = Number( numero1.value);
    var b = Number( numero2.value);
    console.log(a*b);
    return resultadoDoCalculo.innerHTML= a * b 

};
multiplicar(5, 5);
console.log('Depois da Multiplicação');

console.log('Antes da Divisao');
function dividir(a, b) {
    var a = Number( numero1.value);
    var b = Number( numero2.value);
    console.log(a/b);
  if (b == 0) {
    return resultadoDoCalculo.innerHTML = 'Não é Possivel dividir Por 0'
  }
    return resultadoDoCalculo.innerHTML= a / b 

};
// dividir(5, 5);
console.log('Depois da Divisao');

console.log('Antes da expoente');
function expoente(a, b) {
    var a = Number( numero1.value);
    var b = Number( numero2.value);
    console.log('Durante a expoente')
    return console.log(a ** b)

};
expoente(5, 5);
console.log('Depois da expoente');

console.log('Antes da Somar');
function somar(a, b) {
    var a = Number( numero1.value);
    var b = Number( numero2.value);
    console.log('Durante a Somar')
    return console.log(a + b)

};
somar(5, 5);
console.log('Depois da somar');
