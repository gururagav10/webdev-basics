let h1 = document.querySelector("h1 span");
let boxList = document.querySelectorAll(".box");
let head = document.querySelector("h1");
let message = document.querySelector("#message");
let newGame = document.querySelector("#newGame");
let easy = document.querySelector("#easy");
let hard = document.querySelector("#hard");
let colors = [];
let boxNum = 6;

gameWindow(boxNum);

newGame.addEventListener("click", function(){
    if(boxNum === 6){
        hard.classList.add("selected");
        easy.classList.remove("selected");
    }
    else{
        easy.classList.add("selected");
        hard.classList.remove("selected");
    }
    head.style.backgroundColor = "steelblue";
    gameWindow(boxNum); 
});

easy.addEventListener("click", function(){
    easy.classList.add("selected");
    hard.classList.remove("selected");
    head.style.backgroundColor = "steelblue";
    boxNum = 3;
    gameWindow(boxNum);
    for(let m = 3; m < boxList.length; m++){
        boxList[m].style.display = "none";
    }
})

hard.addEventListener("click", function(){
    hard.classList.add("selected");
    easy.classList.remove("selected");
    head.style.backgroundColor = "steelblue";
    for(let m = 3; m < boxList.length; m++){
        boxList[m].style.display = "initial";
    }
    boxNum = 6;
    gameWindow(boxNum);

})


function randNum(num){
    return Math.floor(Math.random() * num + 1);
}

function pickColor(){
    let r = randNum(255);
    let g = randNum(255);
    let b = randNum(255);
    let res = "rgb(" + r +", " + g + ", " + b +")";
    return res;
}

function colorList(num){
    let arr = [];
    for(let i = 0; i < num; i++){
        arr[i] = pickColor();
    }
    return arr;
}

function setColor(color){
    for(let k = 0; k < colors.length; k++){
        boxList[k].style.backgroundColor = color;
    }
    head.style.backgroundColor = color;
}

function selectWinColor(){
    let temp = randNum(colors.length - 1);
    h1.textContent = boxList[temp].style.backgroundColor;
}

function gameWindow(num){
    message.textContent = "";
    newGame.textContent = "New Game"
    colors = colorList(num);
    for (let i = 0; i < colors.length; i++){
        boxList[i].style.backgroundColor = colors[i];
    }
    
    selectWinColor();
    
    for (let j = 0; j < colors.length; j++){
        boxList[j].addEventListener("click", function(){
            if(this.style.backgroundColor === h1.textContent){
                setColor(h1.textContent);
                message.textContent = " Correct! ";
                newGame.textContent = "Play Again";
            }
            else {
                this.style.backgroundColor = "rgb(69, 69, 69)";
                message.textContent = "Try Again!";
            }
        });
    }
}

