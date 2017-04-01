(function(){

	
var canvas = document.getElementById("canvas"), 
ct = canvas.getContext("2d"),
gamePlans = [],
gameObjects = [],
counter = 0, //keeps track of the current level
levelChangeTimer = 0; //delays the change time between levels

var gPlan0 = 
[
  [6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6],
  [6,1,11,1,1,10,1,1,1,1,2,2,1,1,1,6],
  [6,1,1,1,1,1,11,1,14,1,1,1,1,14,1,6],
  [6,14,1,1,1,1,1,1,1,1,1,14,1,1,1,6],
  [6,1,2,1,2,2,1,1,1,1,10,1,1,1,1,6],
  [6,1,2,1,1,1,1,1,1,1,1,11,10,1,1,6],
  [6,1,1,1,14,1,2,2,1,1,1,1,1,1,2,6],
  [6,1,1,14,1,1,2,1,1,1,2,1,14,1,1,6],
  [6,1,2,1,1,1,2,1,2,1,1,1,1,2,1,6],
  [6,1,2,2,1,1,2,2,2,1,11,10,1,1,2,6],
  [6,2,1,1,1,2,1,1,1,1,1,1,1,1,1,6],
  [6,1,11,10,1,1,14,1,1,14,1,2,1,2,2,6],
  [6,1,1,1,2,1,1,1,2,1,1,1,1,1,1,6],
  [6,1,1,1,1,1,10,1,1,1,1,2,1,14,1,6],
  [6,1,14,1,14,1,1,1,1,10,1,1,1,1,1,6],
  [6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6]
];
gamePlans.push(gPlan0);
var gObj0 = 
[
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,8,0,0,0,0,0,0,0,0,3,0,0,0,0,0],
  [0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,3,8,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,5,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0],
  [0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,8,0,0,0,8,0,0,3,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]

];
gameObjects.push(gObj0);

var gPlan1 = 
[
  [6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6],
  [6,1,1,1,1,1,1,1,1,1,1,1,1,1,1,6],
  [6,1,13,2,1,1,1,1,2,13,1,1,1,13,2,6],
  [6,1,1,2,2,2,1,1,2,1,1,1,1,2,1,6],
  [6,1,1,1,2,1,1,1,2,13,1,2,1,2,1,6],
  [6,1,1,1,1,1,2,1,1,1,1,2,1,1,1,6],
  [6,13,13,1,2,2,2,2,2,2,1,2,1,13,1,6],
  [6,1,1,1,1,1,1,1,1,2,2,2,2,1,1,6],
  [6,1,1,2,1,1,13,13,1,2,1,1,1,1,1,6],
  [6,2,1,2,1,1,1,2,1,1,1,2,2,2,1,6],
  [6,1,1,2,13,1,1,2,2,1,1,1,1,2,1,6],
  [6,1,1,1,1,1,1,1,2,1,1,1,2,2,2,6],
  [6,13,1,1,13,1,1,1,2,2,1,1,1,2,1,6],
  [6,1,1,2,2,2,2,1,1,1,1,13,1,2,1,6],
  [6,1,1,1,1,1,2,1,1,1,1,2,1,1,1,6],
  [6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6]
];
gamePlans.push(gPlan1);
var gObj1 = 
[
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,4,0,0,0,0,0,0,0,0,3,0,0,0,4,0],
  [0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,3,0,0,0,0,0,0,5,0,0,0,0,0,0,0],
  [0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0],
  [0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,4,0,0,0,0,0,0,0,0,4,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,4,0,0,3,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
];
gameObjects.push(gObj1);

var EMPTY = 0,FLOOR = 1,BOX = 2,MONSTER = 3,TEDDY = 4,PLAYER = 5,WALL = 6,RABBIT = 8,MUSHROOM = 10,VASES = 11,TOYS = 13,APPLES = 14,
	
SIZE = 64,
tilesheetColumns = 4,
ROWS = gPlan0.length,
COLUMNS = gPlan0[0].length,

player = null,
shoot = false,
spaceKeyIsDown = false,
mess_lvlCompl = null,

sprites = [],
monsters = [],
boxes = [],
messages = [],
cuddlers = [],
hearts = [],
cuddlersCollected = 0,

assetsToLoad = [],
assetsLoaded = 0;
	
var image = new Image();
image.addEventListener("load", loadHandler, false);
image.src = "img/sweetDreams.png";
assetsToLoad.push(image);
	
var shootSound = document.querySelector("#shootSound");
shootSound.addEventListener("canplaythrough", loadHandler, false);
shootSound.load();
assetsToLoad.push(shootSound);
	
//game states
var LOADING = 0,
BUILD_MAP = 1,
PLAYING = 2,
OVER = 3,
LEVEL_COMPLETE = 4,
gameState = LOADING;

//GameWorld object
var gameWorld = {
  x: 0,
  y: 0,
  width: gPlan0[0].length * SIZE,
  height: gPlan0.length * SIZE,
};

//Camera object
var camera = {
  x: 0,
  y: 0,
  width: canvas.width,
  height: canvas.height,
  
  //The camera's inner scroll boundaries
  rightInnerBoundary: function(){
    return this.x + (this.width / 2) + (this.width / 4);
  },
  leftInnerBoundary: function() {
    return this.x + (this.width / 2) - (this.width / 4);
  },
  topInnerBoundary: function(){
    return this.y + (this.height / 2) - (this.height / 4);
  },
  bottomInnerBoundary: function() {
    return this.y + (this.height / 2) + (this.height / 4);
  }
};

//Center the camera over the gameWorld
camera.x = (gameWorld.x + gameWorld.width / 2) - camera.width / 2;
camera.y = (gameWorld.y + gameWorld.height / 2) - camera.height / 2;

var UP = 38,
DOWN = 40,
RIGHT = 39,
LEFT = 37,
SPACE = 32,

moveUp = false,
moveDown = false,
moveRight = false,
moveLeft = false;

window.addEventListener("keydown", function(event) {
  switch(event.keyCode) {
    case UP:
      moveUp = true;
      break;
	  
    case DOWN:
      moveDown = true;
      break;
	    
    case LEFT:
      moveLeft = true;
      break;  
	    
    case RIGHT:
      moveRight = true;
      break;
		  
	 case SPACE:
      if(!spaceKeyIsDown) {
	      shoot = true;
	      spaceKeyIsDown = true; //prevents multiple shoots
	  }
  }
}, false);

window.addEventListener("keyup", function(event) {
  switch(event.keyCode) {
    case UP:
      moveUp = false;
      break;
	  
    case DOWN:
      moveDown = false;
      break;
	    
    case LEFT:
      moveLeft = false;
      break;  
	    
    case RIGHT:
      moveRight = false;
      break;
		  
	case SPACE:
	  spaceKeyIsDown = false;
  }
}, false);

update();

function update() { 
  requestAnimationFrame(update, canvas);

  switch(gameState){
    case LOADING:
      console.log("loading...");
      break;
      
    case BUILD_MAP:
      buildMap(gamePlans[counter]);
      buildMap(gameObjects[counter]);
      createOtherSprites();
      gameState = PLAYING;
      break;
    
    case PLAYING:
      playGame();
      break;
      
    case LEVEL_COMPLETE:
      levelComplete();
      break;
    
    case OVER:
      endGame();
      break;
  }
    render();
}
	
function levelComplete() {
	mess_lvlCompl.visible = true;
	levelChangeTimer++; //counts up the levels...
	if(levelChangeTimer === 120){ //...with a delay of 120 frames
		loadNextLevel();
	}
	
	
	//Load the next level if there is one or end the game if there isn't
	function loadNextLevel() {
		levelChangeTimer = 0;
		counter++; //Update the levelcounter by 1

		if(counter < gamePlans.length) {
			sprites = [];
			monsters = [];
			boxes = [];
			cuddlers = [];

			cuddlersCollected = 0;

			gameWorld.width = gamePlans[counter][0].length * SIZE; //Make sure the gameWorld size 
			gameWorld.height = gamePlans[counter].length * SIZE; //matches the size of the next level

			camera.x = (gameWorld.x + gameWorld.width / 2) - camera.width / 2; //Re-center the camera
			camera.y = (gameWorld.y + gameWorld.height / 2) - camera.height / 2;

			gameState = BUILD_MAP;
		}
		else {
		  gameState = OVER;
		}
	}
}

function loadHandler() { 
	assetsLoaded++;
	if(assetsLoaded === assetsToLoad.length) {
		image.removeEventListener("load", loadHandler, false);
		shootSound.removeEventListener("canplaythrough", loadHandler, false);
		gameState = BUILD_MAP;
	}
}

function buildMap(levelMap) {
  for(var row = 0; row < ROWS; row++) {	
    for(var column = 0; column < COLUMNS; column++) { 
      var currentTile = levelMap[row][column];
    
      if(currentTile !== EMPTY){
        //Find the tile's x and y position on the tile sheet
        var tilesheetX = Math.floor((currentTile - 1) % tilesheetColumns) * SIZE; 
        var tilesheetY = Math.floor((currentTile - 1) / tilesheetColumns) * SIZE;
        
        switch (currentTile){
          case FLOOR:
            var floor = Object.create(spriteObject);
            floor.sourceX = tilesheetX;
            floor.sourceY = tilesheetY;
            floor.x = column * SIZE;
            floor.y = row * SIZE;
            sprites.push(floor);
            break;

          case BOX:
            var box = Object.create(spriteObject);
            box.sourceX = tilesheetX;
            box.sourceY = tilesheetY;
            box.x = column * SIZE;
            box.y = row * SIZE;
            sprites.push(box);
            boxes.push(box);
            break;
				
		  case APPLES:
            var apples = Object.create(spriteObject);
            apples.sourceX = tilesheetX;
            apples.sourceY = tilesheetY;
            apples.x = column * SIZE;
            apples.y = row * SIZE;
            sprites.push(apples);
            boxes.push(apples);
            break;
				
		  case MUSHROOM:
            var mushroom = Object.create(spriteObject);
            mushroom.sourceX = tilesheetX;
            mushroom.sourceY = tilesheetY;
            mushroom.x = column * SIZE;
            mushroom.y = row * SIZE;
            sprites.push(mushroom);
            boxes.push(mushroom);
            break;
				
		  case VASES:
            var vases = Object.create(spriteObject);
            vases.sourceX = tilesheetX;
            vases.sourceY = tilesheetY;
            vases.x = column * SIZE;
            vases.y = row * SIZE;
            sprites.push(vases);
            boxes.push(vases);
            break;
				
		  case TOYS:
            var toys = Object.create(spriteObject);
            toys.sourceX = tilesheetX;
            toys.sourceY = tilesheetY;
            toys.x = column * SIZE;
            toys.y = row * SIZE;
            sprites.push(toys);
            boxes.push(toys);
            break;	
          
          case WALL:
            var wall = Object.create(spriteObject);
            wall.sourceX = tilesheetX;
            wall.sourceY = tilesheetY;            
            wall.x = column * SIZE;
            wall.y = row * SIZE;
            sprites.push(wall);
            break;
          
          case MONSTER:
            var monster = Object.create(monsterObject);
            monster.sourceX = tilesheetX;
            monster.sourceY = tilesheetY;
            monster.x = column * SIZE;
            monster.y = row * SIZE;
            changeDirection(monster);          
            monsters.push(monster);
            sprites.push(monster);
            break; 
          
          case TEDDY:
            var cuddler = Object.create(spriteObject);
            cuddler.sourceX = tilesheetX;
            cuddler.sourceY = tilesheetY;
            cuddler.sourceWidth = 48;
            cuddler.sourceHeight = 50;
            cuddler.width = 48;  
            cuddler.height = 50;          
            cuddler.x = column * SIZE + 8;
            cuddler.y = row * SIZE + 8;
            cuddlers.push(cuddler);
            sprites.push(cuddler);
            break;
				
		  case RABBIT:
            var rabbit = Object.create(spriteObject);
            rabbit.sourceX = tilesheetX;
            rabbit.sourceY = tilesheetY;
            rabbit.sourceWidth = 44;
            rabbit.sourceHeight = 45;
            rabbit.width = 44;  
            rabbit.height = 45;          
            rabbit.x = column * SIZE + 8;
            rabbit.y = row * SIZE + 8;
            cuddlers.push(rabbit);
            sprites.push(rabbit);
            break;
            
          case PLAYER:
            player = Object.create(spriteObject);
            player.sourceX = tilesheetX;
            player.sourceY = tilesheetY;            
            player.x = column * SIZE;
            player.y = row * SIZE;
            sprites.push(player);
            break;
        }
      }
    }
  }
}

function createOtherSprites() {
  mess_lvlCompl = Object.create(spriteObject);
  mess_lvlCompl.sourceX = 0;
  mess_lvlCompl.sourceY = 256;
  mess_lvlCompl.sourceWidth = 256;
  mess_lvlCompl.sourceHeight = 128;
  mess_lvlCompl.width = 256;  
  mess_lvlCompl.height = 128;            
  mess_lvlCompl.x = canvas.width / 2 - mess_lvlCompl.width / 2;
  mess_lvlCompl.y = canvas.height / 2 - mess_lvlCompl.height / 2;
  mess_lvlCompl.visible = false;
  mess_lvlCompl.scrollable = false;
  sprites.push(mess_lvlCompl);
 
  mess_lost = Object.create(spriteObject);
  mess_lost.sourceX = 0;
  mess_lost.sourceY = 384;
  mess_lost.sourceWidth = 256;
  mess_lost.sourceHeight = 128;
  mess_lost.width = 256;  
  mess_lost.height = 128;            
  mess_lost.x = canvas.width / 2 - mess_lost.width / 2;
  mess_lost.y = canvas.height / 2 - mess_lost.height / 2;
  mess_lost.visible = false;
  mess_lost.scrollable = false;
  sprites.push(mess_lost);
  
  mess_won = Object.create(spriteObject);
  mess_won.sourceX = 0;
  mess_won.sourceY = 512;
  mess_won.sourceWidth = 256;
  mess_won.sourceHeight = 128;
  mess_won.width = 256;  
  mess_won.height = 128;            
  mess_won.x = canvas.width / 2 - mess_won.width / 2;
  mess_won.y = canvas.height / 2 - mess_won.height / 2;
  mess_won.visible = false;
  mess_won.scrollable = false;
  sprites.push(mess_won);
}

function playGame() { 
	if(moveUp && !moveDown) {player.vy = -4;} //up
	if(moveDown && !moveUp) {player.vy = 4;} //down
	if(moveLeft && !moveRight) {player.vx = -4;} //left
	if(moveRight && !moveLeft) {player.vx = 4;} //right

	//Set the player's velocity to zero if none of the keys are being pressed
	if(!moveUp && !moveDown) {player.vy = 0;}
	if(!moveLeft && !moveRight) {player.vx = 0;}
	
	//Fire a heart if shoot is true
	if(shoot) {
		fireHeart();
		shoot = false;
		shootSound.currentTime = 0;
		shootSound.play();
	}
	
	//Check player boundaries
	player.x = Math.max(64, Math.min(player.x + player.vx, gameWorld.width - player.width - 64)); 
	player.y = Math.max(64, Math.min(player.y + player.vy, gameWorld.height - player.height - 64));
	
	//Move the hearts
	for(var i = 0; i < hearts.length; i++) {
		var heart = hearts[i];
		heart.y += heart.vy;
		if(heart.y < 0 - heart.height) { 
			removeObject(heart, hearts);
			removeObject(heart, sprites);
			i--; //reduce loop counter to compensate for removed object
		}
	}
	
	//Check collisions between hearts and boxes
	for(var i = 0; i < boxes.length; i++) { 
		var box = boxes[i];
		for(var j = 0; j < hearts.length; j++) {
			var heart = hearts[j];

			if(hitTestRectangle(heart, box)) { //between hearts and monsters
				removeObject(heart, hearts);
				removeObject(heart, sprites);
				j--; //reduce loop counter
			}
		}
	}
	
	//Check collision between player and boxes
	for(var i = 0; i < boxes.length; i++) {
		blockRectangle(player, boxes[i]);
	}

	//Check collisions with player and cuddlers
	for(var i = 0; i < cuddlers.length; i++) { 
		var cuddler = cuddlers[i];
		if(hitTestRectangle(player, cuddler) && cuddler.visible) {
			cuddler.visible = false;
			cuddlersCollected++;

		  if(cuddlersCollected === cuddlers.length) {
			gameState = LEVEL_COMPLETE;
		  }    
		}
	}

	//Check collisions with monsters
	for(var i = 0; i < monsters.length; i++) { 
		var monster = monsters[i];
		for(var j = 0; j < hearts.length; j++) {
			var heart = hearts[j];

			if(hitTestRectangle(heart, monster)) { //between hearts and monsters
				destroyMonster(monster);
				removeObject(heart, hearts);
				removeObject(heart, sprites);
				j--; //reduce loop counter
			}
		}
		if(hitTestCircle(player, monster)) { //between player and monsters
			gameState = OVER;
		}
	}
	
	//Move monsters
	for(var i = 0; i < monsters.length; i++) {
		var monster = monsters[i];

		monster.x += monster.vx;
		monster.y += monster.vy;

		//Check whether the monster is at a tile corner
		if(Math.floor(monster.x) % SIZE === 0
		&& Math.floor(monster.y) % SIZE === 0) {
			changeDirection(monster); //If it is, change the monster's direction
		}

		//Distance between monster and player
		var vx = player.centerX() - monster.centerX();
		var vy = player.centerY() - monster.centerY();

		var magnitude = Math.sqrt(vx * vx + vy * vy);

		if(magnitude < 192) {
			monster.state = monster.ANGRY; //if 2 'blocks' from player, monster is angry 
		}
		else {
			monster.state = monster.NORMAL;
		}

		//Update the monster to reflect state changes
		monster.update();
	}

	//Scroll the camera if player crosses the boundaries
	if(player.x < camera.leftInnerBoundary()) {
		camera.x = Math.floor(player.x - (camera.width / 4));
	}
	if(player.y < camera.topInnerBoundary()) {
		camera.y = Math.floor(player.y - (camera.height / 4));
	}
	if(player.x + player.width > camera.rightInnerBoundary()){
		camera.x = Math.floor(player.x + player.width - (camera.width / 4 * 3));
	}
	if(player.y + player.height > camera.bottomInnerBoundary()){
		camera.y = Math.floor(player.y + player.height - (camera.height / 4 * 3));
	}

	//The camera's gameWorld boundaries
	if(camera.x < gameWorld.x){
	camera.x = gameWorld.x;
		}
	if(camera.y < gameWorld.y) {
		camera.y = gameWorld.y;
	}
	if(camera.x + camera.width > gameWorld.x + gameWorld.width) {
		camera.x = gameWorld.x + gameWorld.width - camera.width;
	}
	if(camera.y + camera.height > gameWorld.height) {
		camera.y = gameWorld.height - camera.height;
	}
	
}

function changeDirection(monster){
	monster.validDirections = [];
	monster.direction = monster.NONE;


	var monsterColumn = Math.floor(monster.x / SIZE);
	var monsterRow = Math.floor(monster.y / SIZE);

	var currentMap = gamePlans[counter];

	if(monsterRow > 0) {
		var thingAbove = currentMap[monsterRow - 1][monsterColumn];
		if(thingAbove === FLOOR) {
			monster.validDirections.push(monster.UP);
		}
	}
	if(monsterRow < ROWS - 1){ 
		var thingBelow = currentMap[monsterRow + 1][monsterColumn];
		if(thingBelow === FLOOR) {
			monster.validDirections.push(monster.DOWN);
		}
	}
	if(monsterColumn > 0) {
		var thingToTheLeft = currentMap[monsterRow][monsterColumn - 1];
		if(thingToTheLeft === FLOOR) {
			monster.validDirections.push(monster.LEFT);
		}
	} 
	if(monsterColumn < COLUMNS - 1) {
		var thingToTheRight = currentMap[monsterRow][monsterColumn + 1];
		if(thingToTheRight === FLOOR) {
			monster.validDirections.push(monster.RIGHT);
		}
	} 

	//If only one valid direction was found
	if(monster.validDirections.length !== 0) {
		//Find out if the monster is at an intersection
		var upOrDownPassage 
		  = (monster.validDirections.indexOf(monster.UP) !== -1 
		  || monster.validDirections.indexOf(monster.DOWN) !== -1);

		var leftOrRightPassage
		  = (monster.validDirections.indexOf(monster.LEFT) !== -1 
		  || monster.validDirections.indexOf(monster.RIGHT) !== -1);

		//Change the monster's direction if it's at an intersection or
		//in a dead-end
		if(upOrDownPassage && leftOrRightPassage || monster.validDirections.length === 1){
			if(player !== null && monster.hunt === true){ 
				findClosestDirection(monster); //Find the closest distance to the player
			}

			//Assign a random validDirection if a validDirection wasn't found that brings 
			//the monster closer to the player
			if(monster.direction === monster.NONE){
				var randomNumber = Math.floor(Math.random() * monster.validDirections.length);
				monster.direction = monster.validDirections[randomNumber];
			  }

			//Choose the monster's final direction
			switch(monster.direction){
				case monster.RIGHT:
				  monster.vx = monster.speed;
				  monster.vy = 0;
				  break;

				case monster.LEFT:
				  monster.vx = -monster.speed;
				  monster.vy = 0;
				  break;

				case monster.UP:
				  monster.vx = 0;
				  monster.vy = -monster.speed;
				  break;

				case monster.DOWN:
				  monster.vx = 0;
				  monster.vy = monster.speed;
			}
		} 
	}  
}

function findClosestDirection(monster){
	var closestDirection = undefined;

	//Find the distance between the monster and the player
	var vx = player.centerX() - monster.centerX(); 
	var vy = player.centerY() - monster.centerY();

	//If the distance is greater on the x axis try left and right
	//If vx <= 0 indicates that the player is closer to the left on the x axis
	if(Math.abs(vx) >= Math.abs(vy)) {
		if(vx <= 0) { 
			closestDirection = monsterObject.LEFT;        
		}
		else {
			closestDirection = monsterObject.RIGHT;	    
		}
	}
	//If the distance is greater on the y axis try up and down
	//If vy <= 0 indicates that the player is above the monster
	else{
		if(vy <= 0) {
			closestDirection = monsterObject.UP;
		}
		else {
			closestDirection = monsterObject.DOWN;
		}
	}

	//Find out if the closestDirection is one of the validDirections
	for(var i = 0; i < monster.validDirections.length; i++){
		if(closestDirection === monster.validDirections[i]){
			monster.direction = closestDirection;
		}
	}
}

function fireHeart() {
	var heart = Object.create(spriteObject);
	heart.sourceY = 128;
	heart.sourceWidth = 50;
	heart.sourceHeight = 37;
	heart.width = 50;
	heart.height = 37;
	heart.x = player.centerX() - heart.halfWidth();
	heart.y = player.y - heart.height;
	//Set its speed
	heart.vy = -8;
	sprites.push(heart);
	hearts.push(heart);
}
	
function destroyMonster(monster) {
	monster.state = monster.ANGRY;
	monster.update();  
	if (monster.alpha > 0.2){
		monster.alpha -= 0.2;
		if (monster.alpha < 0.1){
			removeMonster();
		}
	}

  function removeMonster() {
    removeObject(monster, monsters);
    removeObject(monster, sprites);
  }
}

function removeObject(objectToRemove, array) { 
  var i = array.indexOf(objectToRemove);
  if (i !== -1){
    array.splice(i, 1);
  }
}
	
function endGame() {
	mess_lvlCompl.visible = false;

	if(counter === gamePlans.length
	&& cuddlersCollected === cuddlers.length) {
		mess_won.visible = true;
	}
	else {
		mess_lost.visible = true;
	}
}
	
function render() { 
	ct.clearRect(0, 0, canvas.width, canvas.height);

	//Position the gameWorld inside the camera
	ct.save();
	ct.translate(-camera.x, -camera.y);

	//Display the sprites on the gameWorld
	if(sprites.length !== 0) {
		for(var i = 0; i < sprites.length; i++) {
			var sprite = sprites[i];
			ct.globalAlpha = sprite.alpha;

			//display scrolling sprites
			if(sprite.visible && sprite.scrollable){
				ct.drawImage(image, sprite.sourceX, sprite.sourceY, 
					sprite.sourceWidth, sprite.sourceHeight,
					Math.floor(sprite.x), Math.floor(sprite.y), 
					sprite.width, sprite.height); 
			}

			//display non-scrolling sprites
			if(sprite.visible && !sprite.scrollable) {
				ct.drawImage(image, sprite.sourceX, sprite.sourceY, 
					sprite.sourceWidth, sprite.sourceHeight,
					Math.floor(camera.x + sprite.x), Math.floor(camera.y + sprite.y), 
					sprite.width, sprite.height); 
			}
		 } 
	}

	ct.restore();

	//Display game messages
	if(messages.length !== 0) {
		for(var i = 0; i < messages.length; i++) {
			var message = messages[i];
			if(message.visible) {
				ct.font = message.font;  
				ct.fillStyle = message.fillStyle;
				ct.textBaseline = message.textBaseline;
				ct.fillText(message.text, message.x, message.y);  
			}
		}
	}
}

}());