// Mesma funçoes de Calculadora.js porem é essa é apenas para testes, sem vincúlo com html.

function soma(a, b) {

    return a + b;


};

function subtrair(a, b) {

    return a - b

};

function multiplicar(a, b) {

    return a * b

};

function dividir(a, b) {

    if (b == 0) {
        return 'Não é Possivel dividir Por 0'
    }
    return a / b

};

function expoente(a, b) {

    return a ** b

};


function verificarImparPar(a, b) {


    if ((a + b) % 2 == 0) {
        return (a + b) + ' é Par'
    }
    else if ((a + b) % 2 == 1) {

        return (a + b) + " é Impar"
    }
    else {
        return (a + b) + ' é Invalido ou não se encaixa'
    }


};

function raizquadrada(a, b) {
    var raiz = Math.sqrt(a + b)
    return raiz;

};

function fatorial(a, b) {

    const calFatorial = n => {

        if (n > 1) {
            return n * calFatorial(n - 1)
        }
        return n
    }

    return (calFatorial(a + b));

};



function numeroPrimo(a, b) {

    const verificadorPrimo = numero => {

        if (numero < 2 || isNaN(numero)) {
            return " Não é primo";
        }

        for (let i = 2; i <= Math.sqrt(numero); i++) {

            if (numero % i === 0) {
                return " Não é primo";
            }
        }

        return " É primo";
    }

    return verificadorPrimo(a + b);
};



module.exports = { soma, dividir, multiplicar, subtrair, expoente, verificarImparPar, raizquadrada, fatorial, numeroPrimo };