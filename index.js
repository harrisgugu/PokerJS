let firstcard = 2, secondcard = 3
let cards = [firstcard,secondcard]
let sum = firstcard + secondcard
let age = 21
let hasBlackJack = false
let isAlive = true

let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let cardsEL = document.querySelector("#cards-el")

function renderGame(){
    for(let i = 0;i<cards.length;i++){
        cardsEL.innerText+=cards[i]+' '
    }
    cardsEL.innerText = "Cards:" + firstcard +" "+secondcard  
    if(sum===21){
        message = "congrats! You have won Blackjack!"
        hasBlackJack = true
    }else if(sum<21){
        message = "Would you like another card?"
    
    }else{
        message = "You are out of the game!"
        isAlive =false
    }
    sumEl.innerText = "Sum:"+sum
    messageEl.innerText = message;  
}

function startGame(){
    renderGame()
}

function newCard(){
    let newCard = 10;
    sum+=newCard;
    renderGame();
}



