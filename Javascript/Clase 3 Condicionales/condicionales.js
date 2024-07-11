// Condicionales 
let edad = 24;

if (edad>=18){ // Si se cumple la (condicion)
    console.log("Eres mayor de edad"); // Bloque verdadero 
} else { // En caso de que no se cumpla
    console.log("Eres menor de edad"); // Bloque falso
}


let dispositivo = prompt("¿Como quieres ver netflix, celular/television/tablet")

if(dispositivo == "celular"){
    console.log("Entra a la app Google y escribe Netflix")
}else if(dispositivo == "television"){
    console.log("Prende la tv y presiona el boton rojo")
}else if(dispositivo == "tablet"){
    console.log("Decarga la aplicacion de Netflix e inicia sesion")
} else{
    console.log("No puedes ver Netflix ahi")
}

let figura = prompt("Cual es tu figura"); // Nosotros decidimos el valor

// Funciones para calcular areas
function areaTriangulo(base, altura){
    return (base * altura)/2;
}

function areaRectangulo(base, altura){
    return base * altura;
}

function areaCuadrado(lado){
    return lado * lado;
}


if(figura == "triangulo"){
    let base = parseFloat(prompt("Cuanto mide tu base:"))
    let altura = parseFloat(prompt("Cuanto mide tu altura:"))
    alert("El area del triangulo es: " + areaTriangulo(base, altura));
}else if(figura == "rectangulo"){
    let base = parseFloat(prompt("Cuanto mide tu base:"))
    let altura = parseFloat(prompt("Cuanto mide tu altura:"))
    alert("El area del rectangulo es: " + areaRectangulo(base, altura)); 
} else if(figura == "cuadrado"){
    let lado = parseFloat(prompt("Cuanto mide tu lado"))
    alert("El area del cuadrado es: " + areaCuadrado(lado));
} else {
    console.log("Perdon no puedo calcular esa figura ): ")
}

let edad2 = Number(prompt("cual es tu edad"));
let membresia = prompt("cual es tu membresia? VIP, Plata y Bronce")

if( membresia == "VIP" && edad2 >= 21){
    console.log("tienes permitido el acceso al VIP")
}else if(membresia =="Plata" || "Bronce" && edad2 <= 18){
    console.log("acceso permitido")
}else{
    console.log("Perdon no cumples con los requisitos para entrar")
}