// Array which holds the cards
let card = document.getElementsByClassName('card');
let cards = [...card];

// Array which will compare to see if matching
let flippedCards = [];

// amount of matched card
let matchedCards = document.getElementsByClassName('match');

// Number of moves a player has used
let count = 0;

// The dom variable for the moves class
const moves = document.querySelector('.moves');

// The dom variable for the stars
const stars = document.querySelector('.stars');

// Restart button 
const restartButton = document.querySelector('.restart');

// Timer
const clock = document.querySelector('.timer');

// Seconds variable
let seconds = 0;

// Minutes variable
let minutes = 0;

// Amount of cards matched
let matchedCount = 0;

// Modal element
const modal = document.getElementById('finishModal');

// Close btn in modal
const closeBtn = document.querySelector('.close-btn');

// The p element in the modal
const congratMes = document.querySelector('.congrats');

// Play again btn
const playAgainBtn = document.querySelector('.play-again-btn');

// Loop through cards to display
for (var i = 0; i < cards.length; i++) {
	cards[i].addEventListener('click', showCard)
}

// Toggle open and show class when card is clicked
function showCard() {
	this.classList.toggle('open');
	this.classList.toggle('show');
	this.classList.toggle('remove-events')
}

// Select deck which contains all the cards
const deck = document.querySelector(".deck");

createGrid();

function createGrid(){

// A variable which stores the shuffled cards
	let shuffled = shuffle(cards);

// A loop which adds the shuffled cards into the deck
	for(var i = 0; i < shuffled.length; i++){
		[].forEach.call(shuffled, function(card){
			deck.appendChild(card);
		});
		 cards[i].classList.remove("show", "open", "match", "remove-events");
	}
};

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}


// Add the card which gets flipped to the flipped cards array and see if they match
function flipCard(){
	flippedCards.push(this);
	let length = flippedCards.length;
	if (length === 2){
		moveCount();
		if(flippedCards[0].dataset.id === flippedCards[1].dataset.id){
			matched();
			finished();
		} else {
			deactivate();
			// Not matched function which flips them back over
			setTimeout(function() {
				flippedCards[0].classList.remove("show", "open");
			    flippedCards[1].classList.remove("show", "open");
			    flippedCards[0].classList.remove("remove-events");
			    flippedCards[1].classList.remove("remove-events");
			    flippedCards = [];
			    reactivate();
				}, 1000);
			}
		}
	};

//for when cards match
function matched(){
    flippedCards[0].classList.add("match");
    flippedCards[1].classList.add("match");
    flippedCards[0].classList.remove("show", "open");
    flippedCards[1].classList.remove("show", "open");
    flippedCards = [];
}

// Function to stop cards being clickable when not matched
function deactivate(){
	for(var i = 0; i < cards.length; i++) {
		cards[i].classList.add("remove-events")
	}
}

// Function to allow cards to be clickable again
function reactivate(){
	for(var i = 0; i < cards.length; i++) {
		cards[i].classList.remove("remove-events")
	}
}

// function to add the flipCard click listener to all the cards.
for(var i = 0; i < cards.length; i++){
	cards[i].addEventListener('click', flipCard);
}

// Move counter function
function moveCount(){
	count++;
	moves.innerHTML = count;
	if(count < 15){
		stars.innerHTML = '<li><i class="fa fa-star"></i></li> <li><i class="fa fa-star"></i></li> <li><i class="fa fa-star"></i></li>'  					
	} else if (count < 25) {
		stars.innerHTML = '<li><i class="fa fa-star"></i></li> <li><i class="fa fa-star"></i></li>'
	} else if (count < 35) {
		stars.innerHTML = '<li><i class="fa fa-star"></i></li>'
	} else {
		stars.innerHTML = ''
	}
}

// Click listener on the restart button
restartButton.addEventListener('click', restart);

function restart(){
	stopTimer();
	count = 0;
	moves.innerHTML = count;
	stars.innerHTML = '<li><i class="fa fa-star"></i></li> <li><i class="fa fa-star"></i></li> <li><i class="fa fa-star"></i></li>'
	createGrid();
	minutes = 0;
	seconds = 0;
	startTimer = setInterval(timer, 1000);
}

let startTimer = setInterval(timer, 1000);


function stopTimer(){
	clearInterval(startTimer);
}

function timer(){
	seconds ++;
	clock.innerHTML = minutes + ' Minutes : ' + seconds + ' Seconds';
	if(seconds === 60){
		seconds = 0;
		minutes++;
	}
}


// Event listener for close btn in modal
closeBtn.addEventListener('click', closeModal);

// Add click listener to window to close modal
window.addEventListener('click', outsideClick);

// Play again click listner
playAgainBtn.addEventListener('click', playAgain);

// Show finish modal
function finishModal(){
	modal.style.display = 'block';
}

// Close modal
function closeModal(){
	modal.style.display = 'none';
}

// Close modal by a click outside the modal window
function outsideClick(e){
	if(e.target == modal){
	modal.style.display = 'none';
	}
}

function playAgain(){
	stopTimer();
	count = 0;
	moves.innerHTML = count;
	stars.innerHTML = '<li><i class="fa fa-star"></i></li> <li><i class="fa fa-star"></i></li> <li><i class="fa fa-star"></i></li>'
	createGrid();
	minutes = 0;
	seconds = 0;
	modal.style.display = 'none';
	startTimer = setInterval(timer, 1000);
}

// Function to determine if all are matched
function finished(){
	if(matchedCards.length == 16){
		congratMes.innerHTML = 'You have completed it well done! Your final time was ' + minutes + ' minutes ' + seconds + ' seconds!';
		finishModal();
		seconds = 0;
		mintues = 0;
		stopTimer();
	}
}
