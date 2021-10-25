let cor = [];

function createPallet(colorNumbers) {

  let paleta = document.createElement('div')

  document.getElementsByTagName('body')[0].appendChild(paleta)
  paleta.id = "color-palette"


  for (let i = 0; i < colorNumbers; i += 1) {

    let divColors = colorNumbers[i]
    divColors = document.createElement('div');
    divColors.className = "color";


    document.getElementById('color-palette').appendChild(divColors)

    if (i == 0) {
      divColors.style.backgroundColor = "black"
      cor[i] = "#000"
    } else
      cor[i] = generateColors()
    divColors.style.backgroundColor = cor[i]

    //*divControl.addEventListener('click', selecionar)

  }


}



function createCanvas(ctrl){

    let quadro = document.createElement('div')

  document.getElementsByTagName('body')[0].appendChild(quadro)
  quadro.id = 'pixel-board'

  for (let o = 0; o < ctrl; o += 1) {
  for (let i = 0; i < ctrl; i += 1) {
    
   let canvasPixie = document.createElement('div');
    document.getElementById('pixel-board').appendChild(canvasPixie)
    canvasPixie.className ='pixel'
    
 if(i==ctrl -1){
 let breakLine = document.createElement('br')
 document.getElementById('pixel-board').appendChild(breakLine)
 }

}
  }
    }

function generateColors() {

  var randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);

  if (randomColor.length < 7) {

    randomColor += 0
  }
// Minha contribuição para a formula que vez por outra retornava numeros quebrados

  return randomColor;

  // - randomColor receve "#" concatenado com o arredondamento para baixo (Math.floor()) 
  //de um numero aleatorio entre zero e um  (math.random())
  //Multiplicado pelo numero possivel de cores (*16777215)
  //Tudo isso convertido a uma string de base Hexadecimal (toString(16))


  // Referencias para generateColors
  //https://dev.to/akhil_001/generating-random-color-with-single-line-of-js-code-fhj
  //https://css-tricks.com/snippets/javascript/random-hex-color/
  //https://stackoverflow.com/questions/1484506/random-color-generator
  //https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Number/toString
}




createPallet(4)
createCanvas(5)