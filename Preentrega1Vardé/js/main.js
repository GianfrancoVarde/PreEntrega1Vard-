
let user = prompt( "Ingresa tu nombre");

function saludar (){
    alert ("Hola " + user + ", Calculadora para sumar, restar, multiplicar o dividir.");
}
saludar();

let operador = prompt("Ingresa el símbolo de la operación que deseas realizar +, -, * o / )  :");
let num1 = parseFloat(prompt("Ingresa el primer número: "));
let num2 = parseFloat(prompt("Ingresa el segundo número : "));
let resultado;

function sumar(){
    resultado = num1 + num2;
}
function restar(){
    resultado = num1 - num2;
}
function multiplicar (){
    resultado = num1 * num2; 
}
function dividir () {
    resultado = num1 / num2;
    if (num2 == 0){
        alert ("No se puede dividir por cero");
    }
}

if (operador == "+") {
    sumar();
}
else if (operador == "-") {
    restar();
}
else if (operador == "*") {
    multiplicar();
}
else if (operador == "/") {
    dividir();
}
else  {
        alert ("no ingresaste un operador válido");
}

alert (`${num1} ${operador} ${num2} = ${resultado}`);