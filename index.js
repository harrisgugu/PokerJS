let sum=  0
let cards=  []
let hasBlackJack = false
let isAlive = false

let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let cardsEL = document.querySelector("#cards-el")

let player = {
    name:"Harris",
    chips:135
}

function renderGame(){
    for(let i = 0;i<cards.length;i++){
        cardsEL.innerText+=cards[i]+" "
    }
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
    let firstcard = getRandomCard()
    let secondcard = getRandomCard()
    cards = [firstcard,secondcard]
    sum = firstcard + secondcard
    renderGame()
}

function newCard(){
    if(isAlive&&hasBlackJack===false){
        let newCard = getRandomCard;
        sum+=newCard;
        cards.push(newCard)
        renderGame();
    }
    
}

function getRandomCard(){
    let card =  Math.random()*13;
    card = Math.floor(card)+1
    if(card===1){
        // let answer=""
        // while(answer!=="1"||answer!=="11"){
        //     answer = window.prompt("Would you like this 1 or 11?","1");
        // }
        // return parseInt(answer)
        return 11        
    }else if(card>10){
        return 10
    }
    console.log(card)
    return card
    
}



