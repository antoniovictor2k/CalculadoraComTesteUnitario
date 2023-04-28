var numero1 = document.getElementById('numero1');
var numero2 = document.getElementById('numero2');
var resultadoDoCalculo = document.getElementById('resultadoDoCalculo');


function soma(a, b) {
    var a = Number( numero1.value);
    var b = Number( numero2.value);
    console.log(a+b);
    return resultadoDoCalculo.innerHTML= a + b 
    
};

function subtrair(a, b) {
    var a = Number( numero1.value);
    var b = Number( numero2.value);
    return resultadoDoCalculo.innerHTML= a - b 

};
subtrair(5, 5);

function multiplicar(a, b) {
    var a = Number( numero1.value);
    var b = Number( numero2.value);
    return resultadoDoCalculo.innerHTML= a * b 

};
multiplicar(5, 5);

function dividir(a, b) {
    var a = Number( numero1.value);
    var b = Number( numero2.value);
  if (b == 0) {
    return resultadoDoCalculo.innerHTML = 'Não é Possivel dividir Por 0'
  }
    return resultadoDoCalculo.innerHTML= a / b 

};

function expoente(a, b) {
    var a = Number( numero1.value);
    var b = Number( numero2.value);
    console.log(a**b);
    return resultadoDoCalculo.innerHTML= a ** b 

};


console.log('Antes da Impar ou Par');
function verificarImparPar(a, b) {
    var a = Number( numero1.value);
    var b = Number( numero2.value);
    a=5;
    b=4;
    var somaAB = a+b
    console.log('Durante a Impar ou Par')
    if (somaAB %2==0) {
        return console.log(somaAB +' é Par')
    } 
     else if(somaAB %2==1) {
      
        console.log("Else IF full")
    }
    else{
        console.log('else full')
    }
    // return console.log(a + b)

};
 verificarImparPar(5, 5);
console.log('Depois da Impar ou Par');
