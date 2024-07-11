//escribir en consola
console.log("Hola, ya estoy conectado");
//generar PopUp
alert("Bienvenutte");
alert("Ayudanos a Contestar esta Muy pero muy breve Encuesta")
//salida en el navegador
document.write("Bonito Monday");

//prompt: Escribir Informacion
//console.log("Hola", prompt("¿cual es tu nombre?"));

//mostrar informacion personal basica

nombre = prompt("¿Cual es tu nombre?");
apellido = prompt("¿Cual es tu primer apellido?");
gatos = Number(prompt("¿Cuantos Gatos tienes?"));
perros = Number(prompt("¿Cuantos Perros tienes?"));

var resultado = (gatos + perros); 
console.log("Tu informacion: Te llamas " + nombre + "y tu primer apellido es" + apellido + " cuantos gatos " + gatos + "cuantos perros" + perros );

console.log("Mascotas en total: " + resultado);
