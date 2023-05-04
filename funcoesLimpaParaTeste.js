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
        return 'error'
    }
    return a / b

};

function expoente(a, b) {

    return a ** b

};


function verificarImparPar(a) {


    if (a % 2 == 0) {
        return 'par'
    }
    else if (a % 2 == 1) {

        return "impar"
    }
    else {
        return 'error'
    }

};

function raizquadrada(a) {
    var raiz = Math.sqrt(a)
    if (a <= 0) {
        return 'error'
    }
    return raiz;

};

function fatorial(a) {

    const calFatorial = n => {

        if (n > 1) {
            return n * calFatorial(n - 1)
        }
        return n
    }

    return (calFatorial(a));

};



function numeroPrimo(a) {

    const verificadorPrimo = numero => {

        if (numero < 2 || isNaN(numero)) {
            return false
        }

        for (let i = 2; i <= Math.sqrt(numero); i++) {

            if (numero % i === 0) {
                return false
            }
        }

        return true;
    }

    return verificadorPrimo(a);
};



module.exports = { soma, dividir, multiplicar, subtrair, expoente, verificarImparPar, raizquadrada, fatorial, numeroPrimo };
