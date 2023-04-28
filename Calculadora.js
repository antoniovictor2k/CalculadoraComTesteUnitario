var numero1 = document.getElementById('numero1');
var numero2 = document.getElementById('numero2');

console.log('Antes da Somar');
function soma(a, b) {
    var a = Number( numero1.value);
    var b = Number( numero2.value);
    console.log('Durante a Somar')
    return console.log(a + b)
    
};
console.log('Depois da somar');
console.log('Antes da Subtração');
function subtração(a, b) {
    var a = Number( numero1.value);
    var b = Number( numero2.value);
    console.log('Durante a Subtração')
    return console.log(a - b)

};
subtração(5, 5);
console.log('Depois da Subtração');

console.log('Antes da Multiplicação');
function multiplicacao(a, b) {
    var a = Number( numero1.value);
    var b = Number( numero2.value);
    console.log('Durante a Multiplicação')
    return console.log(a * b)
    
};
multiplicacao(5, 5);
console.log('Depois da Multiplicação');

console.log('Antes da Divisao');
function divisao(a, b) {
    var a = Number( numero1.value);
    var b = Number( numero2.value);
    console.log('Durante a Divisao')
    return console.log(a / b)

};
divisao(5, 5);
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
