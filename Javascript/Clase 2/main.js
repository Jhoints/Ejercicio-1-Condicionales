/*alert("Benvenutto");
alert("Vamos a calcular el area de un ▲Triangulo, ■Cuadrado o ▬Rectangulo");
alert("A Continuacion ingresa los Valores Necesarios para calcular el area");


let Select = prompt("Que Quieres Cálcular Hoy? A)▲, B)■ o C)▬                                          A)▲ Triangulo                 B)■ Cuadrado               C)▬ Rectangulo");


if (Select = "A, a, A), a)") { 

let a = Number(prompt("Base del triángulo: "));
let b = Number(prompt("Altura del triángulo: "));
let R = ( (a*b) /2 );
console.log("▲ Triangulo ▲ Resultado:" + R); }

if (Select = "B, b, B), b)") {

let a = Number(prompt("Valor de un lado "));
let R = ( a * a );
console.log("■ Cuadrado ■ Resultado:" + R); } 

if (Select = "C, c, C), c)") {

let a = Number(prompt("Valor del Ancho"));
let b = Number(prompt("Valor del Largo "));
let R = ( a * b );
console.log("▬ Rectangulo ▬ Resultado:" + R); } 
*/

alert("Benvenutto");
alert("Vamos a calcular el área de un ▲Triángulo, ■Cuadrado o ▬Rectángulo");
alert("A continuación ingresa los valores necesarios para calcular el área");

let Select = prompt(`¿Qué quieres calcular hoy?
A) ▲ Triángulo
B) ■ Cuadrado
C) ▬ Rectángulo`);

let a, b, R;

if (Select === "A" || Select === "a") {
a = Number(prompt("Base del triángulo: "));
b = Number(prompt("Altura del triángulo: "));
R = (a * b) / 2;
console.log("▲ Triángulo ▲ Resultado: " + R);
} else if (Select === "B" || Select === "b") {
a = Number(prompt("Valor de un lado: "));
R = a * a;
console.log("■ Cuadrado ■ Resultado: " + R);
} else if (Select === "C" || Select === "c") {
a = Number(prompt("Valor del Ancho: "));
b = Number(prompt("Valor del Largo: "));
R = a * b;
console.log("▬ Rectángulo ▬ Resultado: " + R);
} else {
alert("Opción no válida.");
}