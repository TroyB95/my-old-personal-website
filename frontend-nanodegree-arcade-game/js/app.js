
let score = 0;
let gemCount = 0;
const scoreCount = document.querySelector('.score');
const levelCount = document.querySelector('.level');
const replayBtn = document.querySelector('.replay-btn');

// reloads the window on click
replayBtn.addEventListener('click', function(){
	window.location.reload(true);
});

// Prompt to select difficulty
let difficulty = prompt('Please Select a Difficulty! (Default is Easy) \nEasy, Medium or Hard. \nPlease type it in the box below! ');
if(difficulty != null){
	difficulty.toLowerCase();
} else {
	alert('Press the restart button to start the game');
}
if(difficulty !== 'easy' && difficulty !== 'medium' && difficulty !== 'hard' && difficulty !== null){
	difficulty = 'easy';
}

// Enemies our player must avoid
var Enemy = function(x, y, speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';

    // The x and y posistion variables where the enemy will be located
    this.x = x;
    this.y = y;
    this.speed = speed;
};

 
// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.

	if(difficulty === 'easy' && this.x < 505){
		this.speed = 150 + (player.level * 5);
		this.x += this.speed * dt;
	} else {
		if(difficulty === 'medium' && this.x < 505){
			this.speed = 150 + (player.level * 6.6);
			this.x += this.speed * dt;
		} else {
			if(difficulty === 'hard' && this.x < 505){
				this.speed = 150 + (player.level * 8.5);
				this.x += this.speed * dt;
		} else {
			this.x = (-(Math.random() * 350));
		}
	}
	} 
    
    // Check for enemy / player collision
    if (this.x < player.x + 25 && this.x + 65 > player.x && this.y < player.y + 60 && this.y + 40 > player.y){
    	player.reset();
    	player.lives--;
    	if(player.lives === 2) {
    		// removes 1 heart on death
    		document.querySelector('.life-three').src = '';
    	} else if (player.lives === 1){
    		document.querySelector('.life-two').src = '';
    	} else if (player.lives === 0){
    		document.querySelector('.life-one').src = ''
    		alert("You lose! You reached level " + player.level + ". Your final score was " + score + " Play again?")
    		score = 0;
    		scoreCount.innerHTML = score;
    		player.level = 0;
    		levelCount.innerHTML = player.level;
            window.location.reload(true);
    }

}
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};


let Player = function(){
	this.sprite = "images/char-boy.png";
	this.x = 200;
	this.y = 300;
	this.level = 0;
	this.lives = 3;

}

Player.prototype.update = function() {
	if(this.y < 20){
		score++;
		scoreCount.innerHTML = score;
		this.level++;
		levelCount.innerHTML = this.level;	
		this.reset();
	}
}

Player.prototype.render = function() {
	ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

// Player move function
Player.prototype.handleInput = function(direction) {
    if(direction == 'left' && this.x > 0) {
        this.x -= 100;
    }
    if(direction == 'right' && this.x < 400) {
        this.x += 100;
    }
    if(direction == 'up' && this.y > 3) {
        this.y -= 85;
    }
    if(direction == 'down' && this.y < 399) {
        this.y += 85;
    }
};

// player reset function
Player.prototype.reset = function() {
	player.x = 200;
	player.y = 300;
}

// Creating the gem constructor function
let Gem = function(x, y){
	this.model = 'images/Gem Blue.png';
	this.x = x;
	this.y = y;
}

Gem.prototype.render = function() {
	ctx.drawImage(Resources.get(this.model), this.x, this.y);
}

Gem.prototype.update = function() {
	// Spawns gems on certain rounds
	if(player.level === 5 && gemCount === 0) {
		gem1.x = 100;
		gem1.y = 130;
	} else if (player.level === 15 && gemCount === 1){
		gem2.x = 300;
		gem2.y = 50;
	} else if (player.level === 25 && gemCount === 2){
		gem3.x = 1;
		gem3.y = 140;
	}  else if (player.level === 35 && gemCount === 3){
		gem4.x = 400;
		gem4.y = 45;
	}
	// Check for gem / player collision
    if(getDistance(this.x, this.y, player.x, player.y) <= 40) {
    	this.collect();
    }	
}

Gem.prototype.collect = function(){
	// What happens when you collect a gem
	score += 5;
	scoreCount.innerHTML = score;
	gemCount++;

	this.x = 5000;
	this.y= 5000;
}

function getDistance(x1, y1, x2, y2){
	let xDistance = x2 - x1;
	let yDistance = y2 - y1;

	return Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));
}

// Spawn enemys depending on what difficulty is selected
if(difficulty === 'easy') {
let enemy1 = new Enemy(-100, 60, 75);
let enemy2 = new Enemy(-210, 140, 75);
var enemy3 = new Enemy(-375, 230, 75);
var gem1 = new Gem(4000, 2500);
var gem2 = new Gem(4000, 2500);
var gem3 = new Gem(4000, 2500);
var gem4 = new Gem(4000, 2500);
var allEnemies = [enemy1, enemy2, enemy3, gem1, gem2, gem3, gem4];
} else if (difficulty === 'medium'){
const enemy1 = new Enemy(-100, 60, 75);
const enemy2 = new Enemy(-210, 140, 75);
const enemy3 = new Enemy(-375, 230, 75);
const enemy4 = new Enemy(-400, 60, 75);
const enemy5 = new Enemy(-550, 140, 75);
var gem1 = new Gem(4000, 2500);
var gem2 = new Gem(4000, 2500);
var gem3 = new Gem(4000, 2500);
var gem4 = new Gem(4000, 2500);
var allEnemies = [enemy1, enemy2, enemy3, enemy4, enemy5,gem1, gem2, gem3, gem4];
} else if (difficulty === 'hard'){
const enemy1 = new Enemy(-100, 60, 75);
const enemy2 = new Enemy(-210, 140, 75);
const enemy3 = new Enemy(-375, 230, 75);
const enemy4 = new Enemy(-400, 60, 75);
const enemy5 = new Enemy(-550, 140, 75);
const enemy6 = new Enemy(-770, 230, 75);
var gem1 = new Gem(4000, 2500);
var gem2 = new Gem(4000, 2500);
var gem3 = new Gem(4000, 2500);
var gem4 = new Gem(4000, 2500);
var allEnemies = [enemy1, enemy2, enemy3, enemy4, enemy5, enemy6, gem1, gem2, gem3, gem4];
}

// Player Variable
var player = new Player();


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
