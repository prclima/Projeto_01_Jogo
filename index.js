let dinoDoido = document.querySelector('.dino');
let cacto = document.querySelector('.cacto');
let fogo = document.querySelector('.fogo');
let btnPlay = document.getElementById('btnPlay');
let imgBackground = document.querySelector('.background');
let h2 = document.querySelector('h2')
let btnRestart = document.getElementById('btnRestart')
let gameOverDino = document.getElementById('gameOverDino')


btnRestart.setAttribute("id", '')

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
 //let statusGame = 0;
    
   if (coordCacto > 855 && coordTopDino < 69) {
    cacto.style.animation = 'none'; 
    imgBackground = imgBackground.setAttribute("src", './imagem/backgroundBusted.jpg');
    btnRestart.setAttribute("id", 'btnRestart');
    dinoDoido = dinoDoido.setAttribute("class", " ");
    cacto = cacto.setAttribute("class", '');

   };

  }, 10);

 

 
   btnRestart.addEventListener('click', () =>  {
    window.location.reload();
    dinoDoido.setAttribute("class", 'dino');
    cacto = cacto.setAttribute("class", 'cacto');

   })

   //("src", '"./imagem/dino.gif');