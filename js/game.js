$(document).ready(function(){
//Canvas stuff
var canvas = document.getElementById('canvas');
var canvasX = canvas.offsetLeft;
var canvasY = canvas.offsetTop;
var ctx = canvas.getContext("2d");
var screenWidth;
var screenHeight;
var startActivityElements = [];

//var Activity  = {StartActivity, LevelOneActivity, LevelTwoActivity, LevelThreeActivity};
//var activity = Activity.StartActivity;

init();
initStartActivity();
//draw();
/*
canvas.addEventListener('click', function(event) {
    var x = event.pageX - canvasX,
        y = event.pageY - canvasY;

    // Collision detection between clicked offset and element.
    startActivityElements.forEach(function(element) {
        if (y > element.Y && y < element.Y + element.height 
            && x > element.X && x < element.X + element.width) {
            onClick(element.name);
        }
    });

}, false);
*/
function init(){
	var canvasContainer = document.getElementById('canvasContainer');
	var cs = getComputedStyle(canvasContainer);	
	canvas.width = parseInt(cs.getPropertyValue('width'), 10) - 20;
	canvas.height = parseInt(cs.getPropertyValue('height'), 10);
	screenWidth = canvas.width;
	screenHeight = canvas.height;
	ctx.fillStyle = "white";
	ctx.fillRect(0, 0, screenWidth, screenHeight);
	ctx.strokeStyle = "black";
	ctx.strokeRect(0, 0, screenWidth, screenHeight);
}

function draw(){
	// case Activity
}

function initStartActivity(){
	var startButton = new Image();
	startButton.src = 'file:///J:/projects/10000dollarsgame/website/img/buttonStart.png';
	var startButtonWidth = screenWidth * 0.2;
	var startButtonHeight = screenHeight * 0.2;
	var startButtonX = screenWidth/2 - startButtonWidth/2;
	var startButtonY = screenHeight/2 - startButtonHeight/2;
	startActivityElements.push({
		name: 'startButton',
		width: startButtonWidth,
		height: startButtonHeight,
		Y: startButtonY,
		X: startButtonX,
	});
	ctx.drawImage(startButton, startButtonX, startButtonY, startButtonWidth, startButtonHeight);
}

function onClick(name){
	alert(name);
}

})

/*

function init()
{
	d = "right"; //default direction
	create_snake();
	create_food(); //Now we can see the food particle
	//finally lets display the score
	score = 0;
	
	//Lets move the snake now using a timer which will trigger the paint function
	//every 60ms
	if(typeof game_loop != "undefined") clearInterval(game_loop);
	game_loop = setInterval(paint, 60);
}
init();

function create_snake()
{
	var length = 5; //Length of the snake
	snake_array = []; //Empty array to start with
	for(var i = length-1; i>=0; i--)
	{
		//This will create a horizontal snake starting from the top left
		snake_array.push({x: i, y:0});
	}
}

//Lets create the food now
function create_food()
{
	food = {
		x: Math.round(Math.random()*(w-cw)/cw), 
		y: Math.round(Math.random()*(h-cw)/cw), 
	};
	//This will create a cell with x/y between 0-44
	//Because there are 45(450/10) positions accross the rows and columns
}

//Lets paint the snake now
function paint()
{
	//To avoid the snake trail we need to paint the BG on every frame
	//Lets paint the canvas now

	
	//The movement code for the snake to come here.
	//The logic is simple
	//Pop out the tail cell and place it infront of the head cell
	var nx = snake_array[0].x;
	var ny = snake_array[0].y;
	//These were the position of the head cell.
	//We will increment it to get the new head position
	//Lets add proper direction based movement now
	if(d == "right") nx++;
	else if(d == "left") nx--;
	else if(d == "up") ny--;
	else if(d == "down") ny++;
	
	//Lets add the game over clauses now
	//This will restart the game if the snake hits the wall
	//Lets add the code for body collision
	//Now if the head of the snake bumps into its body, the game will restart
	if(nx == -1 || nx == w/cw || ny == -1 || ny == h/cw || check_collision(nx, ny, snake_array))
	{
		//restart game
		init();
		//Lets organize the code a bit now.
		return;
	}
	
	//Lets write the code to make the snake eat the food
	//The logic is simple
	//If the new head position matches with that of the food,
	//Create a new head instead of moving the tail
	if(nx == food.x && ny == food.y)
	{
		var tail = {x: nx, y: ny};
		score++;
		//Create new food
		create_food();
	}
	else
	{
		var tail = snake_array.pop(); //pops out the last cell
		tail.x = nx; tail.y = ny;
	}
	//The snake can now eat the food.
	
	snake_array.unshift(tail); //puts back the tail as the first cell
	
	for(var i = 0; i < snake_array.length; i++)
	{
		var c = snake_array[i];
		//Lets paint 10px wide cells
		paint_cell(c.x, c.y);
	}
	
	//Lets paint the food
	paint_cell(food.x, food.y);
	//Lets paint the score
	var score_text = "Score: " + score;
	ctx.fillText(score_text, 5, h-5);
}

//Lets first create a generic function to paint cells
function paint_cell(x, y)
{
	ctx.fillStyle = "blue";
	ctx.fillRect(x*cw, y*cw, cw, cw);
	ctx.strokeStyle = "white";
	ctx.strokeRect(x*cw, y*cw, cw, cw);
}

function check_collision(x, y, array)
{
	//This function will check if the provided x/y coordinates exist
	//in an array of cells or not
	for(var i = 0; i < array.length; i++)
	{
		if(array[i].x == x && array[i].y == y)
		 return true;
	}
	return false;
}

//Lets add the keyboard controls now
$(document).keydown(function(e){
	var key = e.which;
	//We will add another clause to prevent reverse gear
	if(key == "37" && d != "right") d = "left";
	else if(key == "38" && d != "down") d = "up";
	else if(key == "39" && d != "left") d = "right";
	else if(key == "40" && d != "up") d = "down";
	//The snake is now keyboard controllable
})






*/