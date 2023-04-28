var numero1 = document.getElementById('numero1');
var numero2 = document.getElementById('numero2');
var resultadoDoCalculo = document.getElementById('resultadoDoCalculo');


function soma(a, b) {
    var a = Number(numero1.value);
    var b = Number(numero2.value);
    console.log(a + b);
    return resultadoDoCalculo.innerHTML = a + b

};

function subtrair(a, b) {
    var a = Number(numero1.value);
    var b = Number(numero2.value);
    return resultadoDoCalculo.innerHTML = a - b

};

function multiplicar(a, b) {
    var a = Number(numero1.value);
    var b = Number(numero2.value);
    return resultadoDoCalculo.innerHTML = a * b

};

function dividir(a, b) {
    var a = Number(numero1.value);
    var b = Number(numero2.value);
    if (b == 0) {
        return resultadoDoCalculo.innerHTML = 'Não é Possivel dividir Por 0'
    }
    return resultadoDoCalculo.innerHTML = a / b

};

function expoente(a, b) {
    var a = Number(numero1.value);
    var b = Number(numero2.value);
    console.log(a ** b);
    return resultadoDoCalculo.innerHTML = a ** b

};


function verificarImparPar(a, b) {
    var a = Number(numero1.value);
    var b = Number(numero2.value);
    var somaAB = a + b
    console.log('Durante a Impar ou Par')
    if (somaAB % 2 == 0) {
        return resultadoDoCalculo.innerHTML = somaAB + ' é Par'
    }
    else if (somaAB % 2 == 1) {

        return resultadoDoCalculo.innerHTML = somaAB + " é Impar"
    }
    else {
        return resultadoDoCalculo.innerHTML = somaAB + ' é Invalido ou não se encaixa'
    }


};

function raizquadrada(a, b) {
    var a = Number(numero1.value);
    var b = Number(numero2.value);
    var somaAB = a + b;
    var raiz = Math.sqrt(somaAB)
    console.log('Durante a Impar ou Par')
    return resultadoDoCalculo.innerHTML = raiz;

};

function fatorial(a, b) {
    var a = Number(numero1.value);
    var b = Number(numero2.value);

    const calFatorial = n => {

        if (n > 1) {
            return n * calFatorial(n - 1)
        }
        return n
    }

    console.log(calFatorial(a + b))

};

// Não funcionando...

console.log('Inincio teste numero primo');



function numeroPrimo(num) {
    console.log('Startando teste numero primo');
    for (var i = 2; i < num; i++) {
        if(num % i === 0) {
            
            // return false;
        }
        
        
    }
    if (true){
        console.log('nnnnnnnn')
    }
    return num !== 1;  
  }
  console.log( numeroPrimo(1) );

console.log('fim de teste numero primo');
