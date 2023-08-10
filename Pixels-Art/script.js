const collorPalette = document.createElement('div');
collorPalette.id = 'color-palette';
document.body.appendChild(collorPalette);

const collors = ['black', 'yellow', 'red','blue'];
for(let index = 0; index < collors.length;index +=1){
    const div = document.createElement('div');
    div.style.backgroundColor = collors[index];
    collorPalette.appendChild(div);
    div.className = 'color';
    if(index === 0){
        div.classList.add('selected')
    }
}
const divBtns = document.createElement('div');
divBtns.id = 'div-buttons';
document.body.appendChild(divBtns);

const button = document.createElement('button');
button.id = 'button-random-color';
button.innerText = 'Cores aleatórias';
divBtns.appendChild(button);

function gerarCorAleatoria() {
    let letras = '0123456789ABCDEF';
    let cor = '#';
  
    for (let i = 0; i < 6; i+=1) {
      cor += letras[Math.floor(Math.random() * 16)];
    }
  
    return cor;
  }
  button.addEventListener('click', function(){
    for(let index =  1; index < collors.length; index +=1){
        const corAleatoria = gerarCorAleatoria();
        collors[index] = corAleatoria;
        const div = collorPalette.children[index];
        div.style.backgroundColor = corAleatoria;
    }
  })

      const quadro = document.createElement('div')
      quadro.id = 'pixel-board';
      document.body.appendChild(quadro);

      const pixels = [];
      for(let index = 0;index <= 24;index +=1){
          const div = document.createElement('div');
          quadro.appendChild(div);
          div.className = 'pixel';
      }
        const cores = document.querySelectorAll('.color');
        const trocarCores = (event) => {
        const botaoSelecionado = document.querySelector('.selected')
        botaoSelecionado.classList.remove('selected');
        event.target.classList.add('selected')
      }
      for(let i = 0; i < cores.length; i+=1){
        const selectedColor = document.querySelectorAll('.color')[i]
        selectedColor.addEventListener('click', trocarCores);
      }

      const pixel = document.querySelectorAll('.pixel');
      const pintarPixel = (event) => {
        const corSelecionada = document.querySelector('.selected').style.backgroundColor;
        event.target.style.backgroundColor = corSelecionada;
      } 
      pixel.forEach(pixel => {
        pixel.addEventListener('click', pintarPixel);
      });

      const clearBtn = document.createElement('button');
      clearBtn.id = 'clear-board';
      clearBtn.innerText = 'Limpar';
      divBtns.appendChild(clearBtn);

      const clearButton = document.querySelector('#clear-board');
      
      const limpaPixels = () => {
          const pixels = document.querySelectorAll('.pixel');
          pixels.forEach(pixel => {
              pixel.style.backgroundColor = '';
            })
        }
        clearButton.addEventListener('click', limpaPixels);




  

  
  
  
