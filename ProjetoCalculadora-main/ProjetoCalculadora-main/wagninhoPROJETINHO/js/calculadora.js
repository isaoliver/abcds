/* const seila = document.querySelector(".form");

seila.addEventListener('onclick', function (e){
    e.preventDefault();
    
    let numero1 = Number(document.querySelector('num1').value);  
    let numero2 = document.querySelector('num2');

    console.log(numero1, numero2);
   
});

function mensagem() {
    const msg = document.querySelector("#resultado")
    msg.innerHTML = console.log(soma(numero1, numero2))
}


// calculadora em javascript
function soma(numero1, numero2) {
    return parseFloat(numero1) + parseFloat(numero2);
}
*/ 
    
    
function sub() {
    let numero1 = document.getElementById('num1').value;  
    let numero2 = document.getElementById('num2').value; 
    let subtrair = parseFloat(numero1) - parseFloat(numero2);
        
    return document.getElementById('resultado').value = subtrair;
        
}
    
    
function mult() {
    let numero1 = document.getElementById('num1').value; 
    let numero2 = document.getElementById('num2').value;
    let multiplicacao = parseFloat(numero1) * parseFloat(numero2);
        
    return document.getElementById('resultado').value = multiplicacao;
        
}
    
     
function divi() {
    let numero1 = document.getElementById('num1').value;
    let numero2 = document.getElementById('num2').value;
    let divisao = parseFloat(numero1) / parseFloat(numero2);
        
    return document.getElementById('resultado').value = divisao;

}

function pot() {

    let numero1 = document.getElementById('num1').value;
    let numero2 = document.getElementById('num2').value;
    potencia = Math.pow(numero1, numero2);

    return document.getElementById('resultado').value = potencia; 
}



function raiz() {
    let numero1 = document.getElementById('num1').value;
    resultado = Math.sqrt(numero1);
        
    return document.getElementById('resultado').value = resultado;
        
}

function fato() {
    let numero1 = document.getElementById('num1').value;

          var acumula = 1;
          for(x = numero1; x > 1; x--) {
            acumula = acumula * x;
          }
          
          return document.getElementById('resultado').value = acumula;
}
