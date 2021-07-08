const cardArray = [
    {
        name: 'fries',
        img: 'images/fries.png'
    },
    {
        name: 'fries',
        img: 'images/fries.png'
    },
    {
        name:'cheeseburger',
        img: 'images/cheeseburger.png'
    },
    {
        name:'cheeseburger',
        img: 'images/cheeseburger.png'
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png'
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png'
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png'
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png'
    },
    {
        name: 'pizza',
        img: 'images/pizza.png'
    },
    {
        name: 'pizza',
        img: 'images/pizza.png'
    }
];

var cardChosen = [];
var cardChosenId = [];
var cardsWon = [];
var resultDisplay = document.querySelector("#result")

const grid = document.querySelector(".grid");

cardArray.sort(() => 0.5 - Math.random())

function createBoard(){
    for(let i=0; i<cardArray.length; i++){
        var card = document.createElement('img');
        card.setAttribute("src","images/blank.png");
        card.setAttribute("data-id", i);
        card.addEventListener("click", flipcard);
        grid.appendChild(card);
    }
}

function checkForMatch(){
    var cards = document.querySelectorAll('img');
    const optionOneId = cardChosenId[0];
    const optionTwoId = cardChosenId[1];
    if(cardChosen[0] == cardChosen[1]){
        alert("You found a match");
        cards[optionOneId].setAttribute("src", "images/white.png");
        cards[optionTwoId].setAttribute("src", "images/white.png");
        cardsWon.push(cardChosen);
    }else{
        // alert("Sorry, try again");
        cards[optionOneId].setAttribute("src", "images/blank.png");
        cards[optionTwoId].setAttribute("src", "images/blank.png");
    }
    cardChosen=[];
    cardChosenId=[];
    resultDisplay.textContent = cardsWon.length;
    if(cardsWon.length === cardArray.length/2){
        resultDisplay.textContent="Congratulations! You found them all!!";
    }
}

function flipcard(){
    var cardId = this.getAttribute('data-id');
    cardChosen.push(cardArray[cardId].name);
    cardChosenId.push(cardId);
    this.setAttribute('src', cardArray[cardId].img);
    // console.log(cardChosen);
    if(cardChosen.length === 2){
        setTimeout(checkForMatch, 1000);
        // checkForMatch();
        // console.log(cardChosen);
    }
}

createBoard();