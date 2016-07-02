  var snake = {
    direction : 'r',
    body : [[20,20],[20,19]],
  };


function changeDirection(){
}

function getInput(){
  var key = '';
  $('body').keydown(function(event) {
    switch(event.which) {
        case 38 : key = 'u'; break;
        case 39 : key = 'r'; break;
        case 40 : key = 'd'; break;
        case 41 : key = 'l'; break;
    }
  });
  return key;
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
      newPosition = [body[0][0] + 1, body[0][1]];
      break;
    case 'l' :
      newPosition = [body[0][0] - 1, body[0][1]];
      break;
    case 'u' :
      newPosition = [body[0][0], body[0][1] + 1];
      break;
    case 'd' :
      newPosition = [body[0][0], body[0][1] - 1];
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

$(document).ready(function(){
    renderBoard();
    setInterval(function() {
        renderSnake();
        move();
        if (gameOver()) return;
      },
        250
    );

});







