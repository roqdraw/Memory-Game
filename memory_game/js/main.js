console.log("Up and running!");

var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

var cardOne = cards[0];
cardsInPlay.push(0);

console.log("User flipped queen");

var cardTwo = cards[2];
cardsInPlay.push(2);

console.log("User flipped king");

if (cardsInPlay.length === 2) {
if (cardsInPlay[0] === cardsInPlay[2]){
alert("You found a match!");
} else {
	alert("Sorry, try again.")
}
};