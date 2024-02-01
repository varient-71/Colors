const gameBackground = document.querySelector(".header");
const targetColor = document.querySelector(".targetColor");
const choices = document.querySelector(".content");
const controlBtn = document.querySelector(".controls")

const colors = ["red","green","blue","purple","orange","white","black","brown","pink"];
const colorCount = colors.length;
let start = false;
let currentColor = "red";

controlBtn.addEventListener('click',() => {
    if(start == false) startGame();
    else{
        window.close()
    }
});

function startGame(){
    start = true;
    controlBtn.style.backgroundColor = "red";
    controlBtn.innerHTML = "<h2>Quit</h2>";
    chooseColor();
    choices.addEventListener('click',(e) => {
        e.preventDefault();
    
        if(e.target.id == currentColor){
           
            gameBackground.setAttribute("id",currentColor);
            new Audio(`sounds/correct.mp3`).play();
            
            setTimeout(()=>{
                gameBackground.removeAttribute("id");
            },1000);

            setTimeout(chooseColor,1000);
        }
        if(e.target.id != currentColor){
            //add cross sign
            //add voice
            new Audio(`sounds/incorrect.mp3`).play();
            setTimeout(()=>{
                new Audio(`sounds/${currentColor}.mp3`).play();
            },1200)
        }
    });
}

function chooseColor(){
    let randomColor = Math.floor(Math.random()*colorCount);
    targetColor.innerHTML = colors[randomColor].toUpperCase();
    currentColor = colors[randomColor];
    //add sound clip of the choosen color;
    new Audio(`sounds/${currentColor}.mp3`).play();
}

