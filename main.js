var snake = {
  direction : 'r',
  body : [[20,20],[20,19],[20,18]],
};


function changeDirection(){
}

function renderBoard() {
  var $container = $('#container');

  //drawing board
  for(var x = 1; x < 41; x++) {
    for(var y = 1; y < 41; y++) {
      $container.append('<div class="grid x" id="' +
        x + '_' + y + '"></div>');
    }
  }
}

function renderSnake() {
  // remove old snake
  $('.snake').removeClass('snake');

  // draw new snake
  snake.body.forEach(function(entry){
    var x = entry[0];
    var y = entry[1];

    var id = x + '_' + y;
    $('#' + id).addClass('snake');

  });
}

function move(){
  var body = snake.body;
  var newPosition;

  switch (snake.direction) {
    case 'r' :
      newPosition = [body[0][0], body[0][1] + 1];
      break;
    case 'l' :
      newPosition = [body[0][0], body[0][1] - 1];
      break;
    case 'u' :
      newPosition = [body[0][0] - 1, body[0][1]];
      break;
    case 'd' :
      newPosition = [body[0][0] + 1, body[0][1]];
      break;
  }

  snake.body = [newPosition, ...body];
  snake.body.pop();
}

function gameOver(){
  var body = snake.body[0];
  return body[0] > 40  ||  body[0] < 0 ||
            body[1] > 40  ||  body[1] < 0;
}


function changeDirection(event){
  switch(event.which) {
    case 119 : snake.direction = 'u'; break;
    case 100 : snake.direction = 'r'; break;
    case 115 : snake.direction = 'd'; break;
    case  97 : snake.direction = 'l'; break;
  }
}

function moveSnake(){
  move();
  renderSnake();
}


function moveLoop(){
  var moveInterval = setInterval(function(){

      document.onkeypress = function() {
        changeDirection(event);
        clearInterval(moveInterval);
        moveSnake();
        moveLoop();
      };

      moveSnake();

    }, 250);
}



$(document).ready(function() {
  renderBoard();
  renderSnake();
  moveLoop();


});







