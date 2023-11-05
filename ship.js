let score = 0;
let health = 3;
var gear, coin, ship;
$(document).ready(function () {
  var keys = {};
  keys.LEFT = 37;
  keys.UP = 38;
  keys.RIGHT = 39;
  keys.DOWN = 40;
  keys.TOP_LEFT = 36;
  keys.TOP_RIGHT = 33;
  keys.BOTTOM_LEFT = 35;
  keys.BOTTOM_RIGHT = 34;

  ship = {
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
    element: $("#ship"),
  };

  coin = {
    x: Math.floor(Math.random() * (window.innerWidth - $("#coin").width())),
    y: Math.floor(Math.random() * (window.innerHeight - $("#coin").height())),
    element: $("#coin"),
  };

  coin.element.css({
    left: coin.x + "px",
    top: coin.y + "px",
  });

  gear = {
    x: Math.floor(Math.random() * (window.innerWidth - $("#gear").width())),
    y: Math.floor(Math.random() * (window.innerHeight - $("#gear").height())),
    element: $("#gear"),
  };

  gear.element.css({
    left: gear.x + "px",
    top: gear.y + "px",
  });

  $(document).keydown(function (e) {
    keys[e.which] = true;
  });

  $(document).keyup(function (e) {
    keys[e.which] = false;
  });

  function moveShip() {
    var dx = 0;
    var dy = 0;

    if (keys[keys.LEFT]) {
      $("#ship").css("transform", "rotate(-90deg)");
      dx -= 10;
    }

    if (keys[keys.UP]) {
      $("#ship").css("transform", "rotate(0deg)");
      dy -= 10;
    }

    if (keys[keys.RIGHT]) {
      $("#ship").css("transform", "rotate(90deg)");
      dx += 10;
    }

    if (keys[keys.DOWN]) {
      $("#ship").css("transform", "rotate(180deg)");
      dy += 10;
    }

    if (keys[keys.TOP_LEFT]) {
      $("#ship").css("transform", "rotate(-45deg)");
      dx -= 7;
      dy -= 7;
    }

    if (keys[keys.TOP_RIGHT]) {
      $("#ship").css("transform", "rotate(45deg)");
      dx += 7;
      dy -= 7;
    }

    if (keys[keys.BOTTOM_LEFT]) {
      $("#ship").css("transform", "rotate(-135deg)");
      dx -= 7;
      dy += 7;
    }

    if (keys[keys.BOTTOM_RIGHT]) {
      $("#ship").css("transform", "rotate(135deg)");
      dx += 7;
      dy += 7;
    }

    ship.x += dx;
    ship.y += dy;

    ship.element.css({
      left: ship.x + "px",
      top: ship.y + "px",
    });

    if (checkCollision(ship, coin)) {
      collect(1);
      coin.element.hide();
      coin.x = Math.floor(
        Math.random() * (window.innerWidth - coin.element.width())
      );
      coin.y = Math.floor(
        Math.random() * (window.innerHeight - coin.element.height())
      );
      coin.element.css({
        left: coin.x + "px",
        top: coin.y + "px",
      });
      coin.element.show();
    }

    if (checkCollision(ship, gear)) {
      loseLife();
      gear.element.hide();
      gear.x = Math.floor(
        Math.random() * (window.innerWidth - gear.element.width())
      );
      gear.y = Math.floor(
        Math.random() * (window.innerHeight - gear.element.height())
      );
      gear.element.css({
        left: gear.x + "px",
        top: gear.y + "px",
      });
      gear.element.show();
    }
  }

  setInterval(moveShip, 1000 / 60);
});

function checkCollision(obj1, obj2) {
  // console.log(obj2);
  var obj1Left = obj1.x;
  var obj1Right = obj1.x + obj1.element.width();
  var obj1Top = obj1.y;
  var obj1Bottom = obj1.y + obj1.element.height();

  var obj2Left = obj2.x;
  var obj2Right = obj2.x + obj2.element.width();
  var obj2Top = obj2.y;
  var obj2Bottom = obj2.y + obj2.element.height();

  var isColliding = !(
    obj1Left > obj2Right ||
    obj1Right < obj2Left ||
    obj1Top > obj2Bottom ||
    obj1Bottom < obj2Top
  );

  if (isColliding) {
    console.log("obj1Left:", obj1Left);
    console.log("obj1Right:", obj1Right);
    console.log("obj1Top:", obj1Top);
    console.log("obj1Bottom:", obj1Bottom);
    console.log("obj2Left:", obj2Left);
    console.log("obj2Right:", obj2Right);
    console.log("obj2Top:", obj2Top);
    console.log("obj2Bottom:", obj2Bottom);
  }
  // console.log("Are the objects colliding?", isColliding);
  return isColliding;
}

function collect(points) {
  score += points;
  $("#scoreboard").html(score);
}

//   function gearCollide(checkCollision()){

//   }

function spinRandom(position) {}

function loseLife() {
  if (health == 3) $("#heart-3").hide();
  if (health == 2) $("#heart-2").hide();
  if (health == 1) {
    $("#gameover").show();
    $("#heart-1").hide();
  }
  health--;
}
