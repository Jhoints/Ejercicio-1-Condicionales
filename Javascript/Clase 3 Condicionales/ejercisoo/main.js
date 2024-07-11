/*. Escribe un programa que responda a un usuario que quiere comprar un helado en una conocida marca de comida rápida 
cuánto le costará en función del topping que elija.
El helado sin topping cuesta 50 MXN.
El topping de oreo cuesta 10 MXN.
El topping de KitKat cuesta 15 MXN.
El topping de brownie cuesta 20 MXN.
En caso de no disponer del topping solicitado por el usuario, el programa le indicará 
“no tenemos este topping, lo sentimos.” y a continuación le informará el precio del helado sin ningún topping.
"helados hagens dazs" 
alert("Bienvenido a Helados hagens dazs");
alert("elige tu Topping Favorito");
alert("esta es la lista de precios ");
alert("El helado (sabores Vainilla y Chocolate) sin topping cuesta 50 MXN.");
alert("El topping de oreo cuesta 10 MXN.");
alert("El topping de KitKat cuesta 15 MXN.");
alert("El topping de brownie cuesta 20 MXN.");

let Select = prompt("Elige el sabor de tu Helado");
let Select2 = prompt("Elige el Topping")
var Total = (Select + Select2)

let Topping = prompt("Con que Topping quieres tu helado, Oreo, KitKat o Brownie?")

if( Topping == "Oreo"){
    console.log("Helado $50 + Oreo $10")
}else if(Topping == "KitKat"){
    console.log("Helado $50 + KitKat $15")
}else if(Topping == "Brownie"){
    console.log("Helado $50 + Brownie $10")
} else{
    console.log("Helado Solo $50")*/

alert('- Menú de helados -');
alert('Los precios son los siguientes:');
alert('Helado Base (sin topping) $50.00 MXN');
alert('Topping de OREO $10.00 MXN')
alert('Topping de KitKat $15.00 MXN')
alert('Topping de Brownie $20.00 MXN');

let topping = prompt('Elige el sabor del topping que mas te guste (Sin Topping (s/t), Oreo, KitKat, Brownie)');

const helado = 50

function saborDeHeladoOr(helado, oreo) {
    return (helado + oreo);
}
function saborDeHeladoKit(helado, kitkat) {
    return (helado + kitkat);
}
function saborDeHeladoBro(helado, brownie) {
    return (helado + brownie);
}



if (topping == 'oreo' || topping == 'OREO' || topping == 'Oreo') {
    helado;
    let oreo = 10;
    alert('El total de tu helado es de: $' + saborDeHeladoOr(helado, oreo));
}if (topping == 'kitkat' || topping == 'KitKat' || topping == 'KITKAT') {
    helado;
    let kitkat = 15;
    alert('El total de tu helado es de: $' + saborDeHeladoKit(helado, kitkat));
}if (topping == 'brownie' || topping == 'Brownie' || topping == 'BROWNIE') {
    helado;
    let brownie = 20;
    alert('El Total de tu helado es de: $' + saborDeHeladoBro(helado, brownie));
}if (topping == 'solo' || topping == 'SOLO' || topping == 'Solo' || topping == 'S/T' || topping == 's/t' || topping == 'sin topping' || topping == 'SIN TOPPING' || topping == 'null') 
    alert('El total de tu helado es de: $' + helado)
else {
    console.log('La opción seleccionada no es válida, intenta de nuevo.');
}