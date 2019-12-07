
// The GOAL!
// Once the player touches the SUN, they make it to the next level.
let i = 0; // This is a global varible
let y = 3; // This is a global varible
function Sun(x, y) {
  // Each Sun, should have an 'x' and a 'y' property
  // to determine it's starting position
  this.x = x;
  this.y = y;
};


// Enemies our player must avoid
function Enemy(x, y, style, direction, speed) {
  // Each Sun, accept and set an 'x' and a 'y' property
  // to determine it's starting position.
  // Additionally, it should have a 'direction'
  // property with the value of either "ltr" or "rtl"
  // (left to right) or (right to left) so you know
  // 1) which way the enemy is travelling and
  // 2) which image to use (flipped or not flipped)
  // It should also accept a style of 'enemy1',
  // 'enemy2' or 'enemy3', depending on what sort of
  // enemy character you want to use.

  // YOU MAY WANT/NEED other properties in addition
  // to the ones listed.
  this.x = x;
  this.y = y;
  this.style = style;
  this.direction = direction;
  this.speed = speed;
};


// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
  // You should multiply any movement by the dt parameter
  // which will ensure the game runs at the same speed for
  // all computers.
  
  Enemy.bind(allEnemies);
  if (this.x >= -50 && this.direction == "ltr")  {
    this.x = this.x + this.speed;
    if (this.x >= 800) {
      this.direction = "rtl";
    };
  };
  
    
  if (this.x <= 850 && this.direction == "rtl") {
    this.x = this.x - this.speed;
    if (this.x <= 0) {
      this.direction = "ltr";
    };
  };
};

class Player {
  constructor (x, y) {
    this.x = x;
    this.y = y;
  };
  update() {
    
  };
  handleInput(move) {

  if (move === 'up' && this.y > 10) {
      this.y = this.y - 30;
  } else if (move === 'down' && this.y < 430) {
      this.y = this.y + 30;
  } else if (move === 'left' && this.x > 10) {
      this.x =  this.x - 30;
  } else if (move === 'right' && this.x < 780) {
      this.x = this.x + 30;
  };

  if (player.y <= 100 && 280 <= player.x && player.x <= 450) {
    
    player.x = 400;
    player.y = 430;
    i++;
    
    document.getElementsByTagName("span")[0].innerText = i;
    allEnemies[0].speed = allEnemies[0].speed + 1;
    allEnemies[1].speed = allEnemies[1].speed + 1;
    allEnemies[2].speed = allEnemies[2].speed + 1;
  };
  for (let z = 0; z < allEnemies.length; z++) {
    if (allEnemies[z].x < player.x + 80 && allEnemies[z].x + 80 > player.x && allEnemies[z].y < player.y + 80 && allEnemies[z].y + 80 > player.y) {
      player.x = 400;
      player.y = 430;
      allEnemies[0].speed = 1;
      allEnemies[1].speed = 2;
      allEnemies[2].speed = 3;
      document.getElementsByTagName("span")[0].innerText = 0;
      i = 0;
      y--;
      document.getElementsByTagName("span")[1].innerText = y;
      if (y===1) {
       y = 4;
      };
    };
  };
};
};

let player = new Player (400,430);
let sun = new Sun(400,0);
let allEnemies = [new Enemy(0,0,"enemy1","ltr",1), new Enemy(0,100,"enemy2","ltr",2), new Enemy(0,200,"enemy3","ltr",3)];


// Now write your own player class
// This class requires an update() and
// a handleInput() method. It will also need
// an `x` and a `y` starting coordinate.


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
// Place the sun object in a variable called sun


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
  const allowedKeys = {
      37: 'left',
      38: 'up',
      39: 'right',
      40: 'down'
  };
  player.handleInput(allowedKeys[e.keyCode]);
});

