let COLORES = ['ROJO', 'AMARILLO', 'VERDE']
const semaforoImg = document.querySelector('#semaforo-img')

function semaforoLuz() {
  const color = COLORES.pop()
  console.log(color)
  if (!COLORES.length)
    COLORES = ['ROJO', 'AMARILLO', 'VERDE']
  semaforoImg.src = "img/"+color+".png"
  return color
}

const intervalID = setInterval(semaforoLuz, 350)
