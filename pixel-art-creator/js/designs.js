// Select color input
const colorPicker = document.querySelector('#color-picker');
let color = 'black';

colorPicker.addEventListener('change', function(e){
	 color = e.target.value;
	 console.log(color);
})

// Select size input
let width = 0;
let height = 0;

const sizePicker = document.querySelector('#size-picker');
const heightSelector = document.querySelector('#input-height');
const widthSelector = document.querySelector('#input-width');

// Pixel Size variables
const pixelSel = document.querySelector('#pixel-size');

// The default size of pixels
let pixelHeight = 10;
let pixelWidth = 10;

// Selecting all the tr's and td's
let rows = '';
let cols = '';

widthSelector.addEventListener('change', function(e){
	width = e.target.value;
})

heightSelector.addEventListener('change', function(e){
	height = e.target.value;
})



// When size is submitted by the user, call makeGrid()
const canvas = document.querySelector('#pixel-canvas');

sizePicker.addEventListener('submit', function(e){
	e.preventDefault();
	makeGrid();
	
})

// Stops the right-click menu appearing
window.oncontextmenu = ()=> false;

function makeGrid() {
	canvas.innerHTML = '';

	for(var i = 0; i < height; i++){
		const row = document.createElement('TR');
		canvas.appendChild(row);

		for(var j = 0; j < width; j++){
			const col = document.createElement('TD');
			row.appendChild(col);
			
		}

	}	

	rows = document.querySelectorAll('tr');
	cols = document.querySelectorAll('td');

	for(var i = 0; i <= rows.length - 1; i++){
				rows[i].style.height = (pixelHeight +'px');
		}

	for(var i = 0; i <= cols.length - 1; i++){
				cols[i].style.width = (pixelWidth + 'px');
		}


	// When a user clicks a cell, change its background color
	canvas.addEventListener("mousedown", function(e) {
		if(e.button === 0) {
  			if (e.target && e.target.nodeName == "TD") {
    			e.target.style.backgroundColor = color;
  			}
  		}
  	});

	// When the user right clicks - change cell background to white
  	canvas.addEventListener("contextmenu", function(e) {
		if(e.button === 2) {
  			if (e.target && e.target.nodeName == "TD") {
    			e.target.style.backgroundColor = 'white';
  			}
  		}
	});

  	// Set the variables from the user input
	pixelSel.addEventListener('change', function(e){
		pixelHeight = e.target.value;
			pixelWidth = e.target.value;
	});



}













