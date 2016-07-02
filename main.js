function changeDirection(){

}

function drawSnake(snakeBody){
  var $container = $('#container');

  snakeBody.forEach(function(entry){
    var x = entry[0];
    var y = entry[1];

    var id = x + '_' + y;
    $('#' + id).addClass('snake');

  });
}

function render() {
  var $container = $('#container');
  for(var x = 1; x < 41; x++) {
    for(var y = 1; y < 41; y++) {
      $container.append('<div class="grid x" id="' + x + '_' + y + '"></div>');
    }
  }
}

$(document).ready(function(){
  var snake = {
    direction : 'r',
    body : [[20,20]],
  };

  render();
  drawSnake(snake.body);
});





