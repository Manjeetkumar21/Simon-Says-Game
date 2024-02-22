let userSeq = [];
let gameSeq = [];

let btns = ["red", "yellow", "green", "blue"];

let start = false;
let level = 0;
let h2 = document.querySelector('h2')

document.addEventListener('keypress',function(){
    if(start == false){
        console.log("Game is Started");
        start = true;

        levelUp()
    }
})

function levelUp(){
    userSeq = []
    level++;
    h2.innerHTML = `Level ${level}`
    h2.style.color = "black"

    let randIdx = Math.floor(Math.random()*3)
    let randColor = btns[randIdx]
    let randBtn = document.querySelector(`.${randColor}`)

    gameSeq.push(randColor)
    console.log(gameSeq);
    gameFlash(randBtn)

}

function gameFlash(btn){
    btn.classList.add('gameFlash')
    setTimeout(() => {
        btn.classList.remove('gameFlash')
    }, 250);
}

function userFlash(btn){
    btn.classList.add('userFlash')
    setTimeout(() => {
        btn.classList.remove('userFlash')
    }, 250);
}

let allBtns = document.querySelectorAll(".button")

function BtnClick(){
    let btn = this;

    userFlash(btn);
    let userColor = btn.getAttribute('id');
    userSeq.push(userColor);
    console.log(userSeq);

    checkAns(userSeq.length-1);
}

allBtns.forEach(function(btns){
    btns.addEventListener('click',BtnClick)
})

// Check Answer

function checkAns(idx){

    if(userSeq[idx]===gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp,1000)
        }
    } else{
        h2.style.color = "brown"
        h2.innerHTML = `GAME OVER!<br><b style="color:blue;">Your Score was ${level}</b> <br> Press any key to start again`;
        let body = document.querySelector('body');
        body.style.backgroundColor =  'red'
        setTimeout(function(){
            body.style.backgroundColor = "white"
        },150);
        
        reset();
    }
}

function reset(){
    start = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
    
}