let score = 0;
$(document).ready(function() {
    var keys = {};
    keys.LEFT = 37;
    keys.UP = 38;
    keys.RIGHT = 39;
    keys.DOWN = 40;
    keys.TOP_LEFT = 36;
    keys.TOP_RIGHT = 33;
    keys.BOTTOM_LEFT = 35;
    keys.BOTTOM_RIGHT = 34;

    var ship = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
      element: $('#ship')
    };

    var coin = {
        x: 0,
        y: 0,
        element: $('#coin')
      };

    $(document).keydown(function(e) {
      keys[e.which] = true;
    });

    $(document).keyup(function(e) {
      keys[e.which] = false;
    });

    function moveShip() {
      var dx = 0;
      var dy = 0;

      if (keys[keys.LEFT]) {
        $('#ship').css('transform', 'rotate(-90deg)');
        dx -= 10;
      }

      if (keys[keys.UP]) {
        $('#ship').css('transform', 'rotate(0deg)');
        dy -= 10;
      }

      if (keys[keys.RIGHT]) {
        $('#ship').css('transform', 'rotate(90deg)');
        dx += 10;
      }

      if (keys[keys.DOWN]) {
        $('#ship').css('transform', 'rotate(180deg)');
        dy += 10;
      }

      if (keys[keys.TOP_LEFT]) {
        $('#ship').css('transform', 'rotate(-45deg)');
        dx -= 7;
        dy -= 7;
      }

      if (keys[keys.TOP_RIGHT]) {
        $('#ship').css('transform', 'rotate(45deg)');
        dx += 7;
        dy -= 7;
      }

      if (keys[keys.BOTTOM_LEFT]) {
        $('#ship').css('transform', 'rotate(-135deg)');
        dx -= 7;
        dy += 7;
      }

      if (keys[keys.BOTTOM_RIGHT]) {
        $('#ship').css('transform', 'rotate(135deg)');
        dx += 7;
        dy += 7;
      }

      ship.x += dx;
      ship.y += dy;

      ship.element.css({
        left: ship.x + 'px',
        top: ship.y + 'px'
      });

      if (checkCollision(ship, coin)) {
        collect(1);
        coin.element.hide();
        coin.x = Math.floor(Math.random() * (window.innerWidth - coin.element.width()));
        coin.y = Math.floor(Math.random() * (window.innerHeight - coin.element.height()));
        coin.element.css({
          left: coin.x + 'px',
          top: coin.y + 'px'
        });
        coin.element.show();
      }
    }

    setInterval(moveShip, 1000 / 60);

  });

  function checkCollision(obj1, obj2) {
    var obj1Left = obj1.x;
    var obj1Right = obj1.x + obj1.element.width();
    var obj1Top = obj1.y;
    var obj1Bottom = obj1.y + obj1.element.height();

    var obj2Left = obj2.x;
    var obj2Right = obj2.x + obj2.element.width();
    var obj2Top = obj2.y;
    var obj2Bottom = obj2.y + obj2.element.height();

    return !(obj1Left > obj2Right ||
             obj1Right < obj2Left ||
             obj1Top > obj2Bottom ||
             obj1Bottom < obj2Top);
  }

  function collect(points) {
    score += points;
    $('#scoreboard').html(score);
  }