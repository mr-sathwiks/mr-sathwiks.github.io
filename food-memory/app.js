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
var resultDisplay = document.querySelector(".score-cnt");

const grid = document.querySelector(".grid");

cardArray.sort(() => 0.5 - Math.random());

var sa = 0;

function createBoard(){
    for(let i=0; i<cardArray.length; i++){
        var card = document.createElement('img');
        card.setAttribute("src","images/blank.png");
        card.setAttribute("data-id", i);
        card.setAttribute("class", "card-img");
        card.addEventListener("click", flipcard);
        grid.appendChild(card);
    }
}

function checkForMatch(){
    var cards = document.querySelectorAll('img');
    const optionOneId = cardChosenId[0];
    const optionTwoId = cardChosenId[1];
    if(cardChosen[0] == cardChosen[1]){
        // alert("You found a match");
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
    sa=0;
    if(cardsWon.length === cardArray.length/2){
        resultDisplay.textContent="Congratulations! You found them all!!";
        document.querySelector(".score-title").textContent="";
        const ci = document.querySelectorAll(".card-img")
        for(let i=0; i<ci.length; i++){
            ci[i].setAttribute("src", cardArray[i].img);
            // console.log(grid[i]);
        }
    }
}

function flipcard(){
    if(sa<2){
        var cardId = this.getAttribute('data-id');
        cardChosen.push(cardArray[cardId].name);
        cardChosenId.push(cardId);
        this.setAttribute('src', cardArray[cardId].img);
        // console.log(cardChosen);
        if(cardChosen.length === 2){
            setTimeout(checkForMatch, 600);
            // checkForMatch();
            // console.log(cardChosen);
        }
        sa++;
    }
    
}

createBoard();