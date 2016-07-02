var snake = {
  direction : 119,
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
    //up
    case 119 :
      newPosition = [body[0][0] - 1, body[0][1]];
      break;
    //right
    case 100 :
      newPosition = [body[0][0], body[0][1] + 1];
      break;
    //down
    case 115 :
      newPosition = [body[0][0] + 1, body[0][1]];
      break;
    //left
    case 97 :
      newPosition = [body[0][0], body[0][1] - 1];
      break;
  }

  snake.body = [newPosition, ...body];
  snake.body.pop();
}

function gameOver(key){
  var body = snake.body[0];
  return body[0] > 40  ||  body[0] < 0 ||
            body[1] > 40  ||  body[1] < 0;
}


function correctInput(event) {
  return [119, 100, 115, 97].includes(event.which);
}

function changeDirection(event) {
  return snake.direction = event.which;
}

function sameDirection(event) {
  return snake.direction == event.which;
}

function moveSnake(){
  move();
  renderSnake();
}


function moveLoop(){
  var moveInterval = setInterval(function(){

      document.onkeypress = function() {
        console.log(sameDirection(event));
        if (sameDirection(event) || !correctInput(event)) {
          return;
        }
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







