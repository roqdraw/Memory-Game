console.log("Let's play.");

var cards = [
	{
	rank: "Queen",
	suit: "Hearts",
	cardImage: "memory_game/images/queen-of-hearts.png"
	},
	{
	rank: "Queen",
	suit: "Diamonds",
	cardImage: "memory_game/images/queen-of-diamonds.png"
	},
	{
	rank: "King",
	suit: "Hearts",
	cardImage: "memory_game/images/king-of-hearts.png"
	},
	{
	rank: "King",
	suit: "Diamonds",
	cardImage: "memory_game/images/king-of-diamonds.png"
	}
];

var cardsInPlay = [];

var checkForMatch = function(){
	if (cardsInPlay[0] === cardsInPlay[1]){
		alert("You've found a match!");
	} else {
		alert("Sorry, try again.")
	}
};

var flipCard = function(cardId) {
	var cardId = this.getAttribute('data-id');
	console.log(`User flipped ${cards[cardId].rank} of ${cards[cardId].suit}`);
	cardsInPlay.push(cards[cardId].rank);
	this.setAttribute('src', cards[cardId].cardImage);

	if (cardsInPlay.length === 2) {
		checkForMatch();
	}
};

var createBoard = function() {
	for (var i = 0; i < cards.length; i++){
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', "memory_game/images/back.png");
		cardElement.setAttribute('data-id', i);
		document.getElementById('game-board').appendChild(cardElement);
		cardElement.addEventListener('click', flipCard);
	}
};

createBoard();