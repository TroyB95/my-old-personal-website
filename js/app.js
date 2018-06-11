/* ======= Model ======= */

// Data for each of the players, plus currentTurn to track what turn it is.

var model = {
	currentTurn: 0,
	players: [
		{
			symbol: '',
			score: 0,
			name: 'Player1'
		},
		{
			symbol: '',
			score: 0,
			name: 'Player2'
		}
		]
};



/* ======= Octopus ======= */

var octopus = {

	init: function() {
		model.currentTurn = 0;

		symbolSelectView.init();
		refreshButton.init();
	},

	winCondition: function() {
		var cells = document.querySelectorAll('.cell');

		// Win conditions for player 1. Very verbose

		if(cells[0].innerHTML === model.players[0].symbol && cells[1].innerHTML === model.players[0].symbol && cells[2].innerHTML === model.players[0].symbol) {
			alert('Player 1, ' + model.players[0].symbol + ' Wins!');
			model.players[0].score++;
			scoreView.init();
			this.gridReset();
		} else if(cells[0].innerHTML === model.players[0].symbol && cells[3].innerHTML === model.players[0].symbol && cells[6].innerHTML === model.players[0].symbol) {
			alert('Player 1, ' + model.players[0].symbol + ' Wins!');
			model.players[0].score++;
			scoreView.init();
			this.gridReset();
		}  else if(cells[0].innerHTML === model.players[0].symbol && cells[4].innerHTML === model.players[0].symbol && cells[8].innerHTML === model.players[0].symbol) {
			alert('Player 1, ' + model.players[0].symbol + ' Wins!');
			model.players[0].score++;
			scoreView.init();
			this.gridReset();
		}  else if(cells[1].innerHTML === model.players[0].symbol && cells[4].innerHTML === model.players[0].symbol && cells[7].innerHTML === model.players[0].symbol) {
			alert('Player 1, ' + model.players[0].symbol + ' Wins!');
			model.players[0].score++;
			scoreView.init();
			this.gridReset();
		}  else if(cells[2].innerHTML === model.players[0].symbol && cells[5].innerHTML === model.players[0].symbol && cells[8].innerHTML === model.players[0].symbol) {
			alert('Player 1, ' + model.players[0].symbol + ' Wins!');
			model.players[0].score++;
			scoreView.init();
			this.gridReset();
		}  else if(cells[2].innerHTML === model.players[0].symbol && cells[4].innerHTML === model.players[0].symbol && cells[6].innerHTML === model.players[0].symbol) {
			alert('Player 1, ' + model.players[0].symbol + ' Wins!');
			model.players[0].score++;
			scoreView.init();
			this.gridReset();
		}  else if(cells[3].innerHTML === model.players[0].symbol && cells[4].innerHTML === model.players[0].symbol && cells[5].innerHTML === model.players[0].symbol) {
			alert('Player 1, ' + model.players[0].symbol + ' Wins!');
			model.players[0].score++;
			scoreView.init();
			this.gridReset();
		}  else if(cells[6].innerHTML === model.players[0].symbol && cells[7].innerHTML === model.players[0].symbol && cells[8].innerHTML === model.players[0].symbol) {
			alert('Player 1, ' + model.players[0].symbol + ' Wins!');
			model.players[0].score++;
			scoreView.init();
			this.gridReset();

		// Win condition for player 2.

		} else if(cells[0].innerHTML === model.players[1].symbol && cells[1].innerHTML === model.players[1].symbol && cells[2].innerHTML === model.players[1].symbol) {
			alert('Player 2, ' + model.players[1].symbol + ' Wins!');
			model.players[1].score++;
			scoreView.init();
			this.gridReset();
		} else if(cells[0].innerHTML === model.players[1].symbol && cells[3].innerHTML === model.players[1].symbol && cells[6].innerHTML === model.players[1].symbol) {
			alert('Player 2, ' + model.players[1].symbol + ' Wins!');
			model.players[1].score++;
			scoreView.init();
			this.gridReset();
		}  else if(cells[0].innerHTML === model.players[1].symbol && cells[4].innerHTML === model.players[1].symbol && cells[8].innerHTML === model.players[1].symbol) {
			alert('Player 2, ' + model.players[1].symbol + ' Wins!');
			model.players[1].score++;
			scoreView.init();
			this.gridReset();
		}  else if(cells[1].innerHTML === model.players[1].symbol && cells[4].innerHTML === model.players[1].symbol && cells[7].innerHTML === model.players[1].symbol) {
			alert('Player 2, ' + model.players[1].symbol + ' Wins!');
			model.players[1].score++;
			scoreView.init();
			this.gridReset();
		}  else if(cells[2].innerHTML === model.players[1].symbol && cells[5].innerHTML === model.players[1].symbol && cells[8].innerHTML === model.players[1].symbol) {
			alert('Player 2, ' + model.players[1].symbol + ' Wins!');
			model.players[1].score++;
			scoreView.init();
			this.gridReset();
		}  else if(cells[2].innerHTML === model.players[1].symbol && cells[4].innerHTML === model.players[1].symbol && cells[6].innerHTML === model.players[1].symbol) {
			alert('Player 2, ' + model.players[1].symbol + ' Wins!');
			model.players[1].score++;
			scoreView.init();
			this.gridReset();
		}  else if(cells[3].innerHTML === model.players[1].symbol && cells[4].innerHTML === model.players[1].symbol && cells[5].innerHTML === model.players[1].symbol) {
			alert('Player 2, ' + model.players[1].symbol + ' Wins!');
			model.players[1].score++;
			scoreView.init();
			this.gridReset();
		}  else if(cells[6].innerHTML === model.players[1].symbol && cells[7].innerHTML === model.players[1].symbol && cells[8].innerHTML === model.players[1].symbol) {
			alert('Player 2, ' + model.players[1].symbol + ' Wins!');
			model.players[1].score++;
			scoreView.init();
			this.gridReset();
		} else if(cells[0].innerHTML !== '' && cells[1].innerHTML !== '' && cells[2].innerHTML !== '' && cells[3].innerHTML !== '' && cells[4].innerHTML !== '' && cells[5].innerHTML !== '' && cells[6].innerHTML !== '' && cells[7].innerHTML !== '' && cells[8].innerHTML !== '') {
			this.gridReset();
		}
	},

	// Reset function when a player wins
	gridReset: function() {
		var cells = document.querySelectorAll('.cell');
		setTimeout(function() {
			cells.forEach(function(cell){
			cell.innerHTML = '';
			model.currentTurn = 0;
			if(cell.classList.contains('remove-events')){
				cell.classList.toggle('remove-events');
			}
		})
		}, 1500);
		
	},

	gridRestart: function() {

		var cells = document.querySelectorAll('.cell');
			cells.forEach(function(cell){
			cell.innerHTML = '';
			if(cell.classList.contains('remove-events')){
				cell.classList.toggle('remove-events');
			}
			var xSelector = document.querySelector('.x-selector');
			var oSelector = document.querySelector('.o-selector');
			if(xSelector.classList.contains('remove-events') && oSelector.classList.contains('remove-events')) {
				xSelector.classList.toggle('remove-events');
				oSelector.classList.toggle('remove-events');
			}
			model.currentTurn = 0;
			model.players[0].score = 0;
			model.players[1].score = 0;
			model.players[0].symbol = '';
			model.players[1].symbol = '';
			scoreView.init();
		})
		
	}




}








/* ======= View ======= */

var symbolSelectView = {

	init: function() {
		var xSelector = document.querySelector('.x-selector');
		var oSelector = document.querySelector('.o-selector');

		xSelector.addEventListener('click', function(){
			if(model.players[0].symbol === '' && model.players[1].symbol === '') {
				model.players[0].symbol = 'X';
				model.players[1].symbol = 'O'
				gameBoardView.init();
				xSelector.classList.toggle('remove-events');
				oSelector.classList.toggle('remove-events');
		} else if (model.players[0].symbol === 'X') {
			alert('X is already selected to go first');
		} else if (model.players[0].symbol === 'O') {
			alert('Please restart and select a starting symbol');
		}
		})

		oSelector.addEventListener('click', function(){
			if(model.players[0].symbol === '' && model.players[1].symbol === '') {
				model.players[0].symbol = 'O';
				model.players[1].symbol = 'X';
				gameBoardView.init();
				oSelector.classList.toggle('remove-events');
				xSelector.classList.toggle('remove-events');
			} else if (model.players[0].symbol === 'O') {
				alert('O is already selected to go first');
			} else if (model.players[0].symbol === 'X') {
				alert('Please restart and select a starting symbol')
			}
		})
	},

	
		
	

};


var gameBoardView = {

	init: function() {
		this.board = document.querySelector('.inside-board');
		

		this.render();
	},

	render: function() {
		// When a user clicks a cell, change its background color
		this.board.addEventListener("mousedown", function(e) {
			if(e.button === 0 && model.currentTurn === 0) {
  				if (e.target && e.target.nodeName == "LI") {
    				e.target.innerHTML = model.players[0].symbol;
    				e.target.classList.toggle('remove-events');
    				model.currentTurn++;
    				octopus.winCondition();
  				}
  			} else if (e.button === 0 && model.currentTurn === 1) {
  				if (e.target && e.target.nodeName == "LI") {
    				e.target.innerHTML = model.players[1].symbol;
    				e.target.classList.toggle('remove-events');
    				model.currentTurn = 0;
    				octopus.winCondition();
  				}
  			}
  		});
	}
}

var scoreView = {

	init: function() {
		this.playerOne = document.querySelector('.player-one');
		this.playerTwo = document.querySelector('.player-two');

		this.render();
	},

	render: function() {
		this.playerOne.innerHTML = 'Player 1: ' + model.players[0].score;
		this.playerTwo.innerHTML = 'Player 2: ' + model.players[1].score;
	}
}

var refreshButton = {

	init: function() {
		this.refreshBtn = document.querySelector('.refresh-icon');

		this.render();
	},


	render: function() {
		this.refreshBtn.addEventListener('click', function() {
				octopus.gridRestart();
		})
	}
}


octopus.init();