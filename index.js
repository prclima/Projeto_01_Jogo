const dinoDoido = document.querySelector('.dino');
const cacto = document.querySelector('.cacto');
const fogo = document.querySelector('.fogo');
const btnPlay = document.querySelector('button');
const imgBackground = document.querySelector('.background');
const h2 = document.querySelector('h2')

// Jogo começa com usuário apertando o botao Play.
btnPlay.addEventListener('click', pressPlay)
function pressPlay() { 
     dinoMove();
     cactoMoveIni();
     btnPlay.remove(btnPlay)
}

function dinoMove () {
  document.addEventListener('keydown', () => {
   (dinoDoido.classList.add("dinoJump"));
    setTimeout(()=>{
      (dinoDoido.classList.remove("dinoJump"))
    }, 400);
})
}

function cactoMoveIni() {
    cacto.classList.add('cactoSpeed')
       //setTimeout(()=>{
       //(cacto.classList.remove('cactoSpeed_1'))
    // },7500);
    //  setTimeout(()=>{
    //    (cacto.classList.add('cactoSpeed_2'))
    //  },20000)
    //  setTimeout(()=>{
    //    (cacto.classList.remove('cactoSpeed_2'))
    //  },8900);
     //setTimeout(()=>{
       //(cacto.classList.add('cactoSpeed_3'))
     //},8901)
    //  setTimeout(()=>{
    //  (cacto.classList.remove('cactoSpeed_3'))
    //  },11900);
   setTimeout(()=>{
     (cacto.classList.add('cactoSpeed_4'))
     },60000)
    }
  

   
const log  = setInterval(() => {
  let coordCacto = parseInt(window.getComputedStyle(cacto).getPropertyValue("left"))
 let coordTopDino = parseInt((window.getComputedStyle(dinoDoido).bottom)) 
    
   if (coordCacto > 855 && coordTopDino < 69) {
    cacto.style.animation = 'none';
    imgBackground = imgBackground.setAttribute("src", "./imagem/backgroundBusted.jpg")
   }

  }, 10);
