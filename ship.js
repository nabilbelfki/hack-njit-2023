let score = 0;
let health = 3;
let health5, health4, health3, health2, health1;
let rock1, rock2, rock3;
let forceField = false;
var gear, coin, ship, orb;
var canShoot = true;
var direction = "up";
var enemy = 100;
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

  spawnRocks();
  clouds();
  moveSpinner();

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

  setInterval(function () {
    gear.x = gear.element[0].offsetLeft;
    gear.y = gear.element[0].offsetTop;
  }, 1);

  // setHealthBarPosition();

  setInterval(function () {
    setHealthBarPosition();
  }, 1);

  orb = {
    x: Math.floor(Math.random() * (window.innerWidth - $("#orb").width())),
    y: Math.floor(Math.random() * (window.innerHeight - $("#orb").height())),
    element: $("#orb"),
  };

  orb.element.css({
    left: orb.x + "px",
    top: orb.y + "px",
  });

  setTimeout(function () {
    $("#orb").show();
  }, 7000);

  $(document).keydown(function (e) {
    keys[e.which] = true;
  });

  $(document).keyup(function (e) {
    keys[e.which] = false;
  });

  function moveShip() {
    if (health > 0) {
      var dx = 0;
      var dy = 0;

      if (keys[keys.LEFT]) {
        direction = "left";
        $("#ship").css("transform", "rotate(-90deg)");
        $("#force-field").css("transform", "rotate(0deg)");
        dx -= 10;
      }

      if (keys[keys.UP]) {
        direction = "up";
        $("#ship").css("transform", "rotate(0deg)");
        $("#force-field").css("transform", "rotate(-90deg)");
        dy -= 10;
      }

      if (keys[keys.RIGHT]) {
        direction = "right";
        $("#ship").css("transform", "rotate(90deg)");
        $("#force-field").css("transform", "rotate(180deg)");
        dx += 10;
      }

      if (keys[keys.DOWN]) {
        direction = "down";
        $("#ship").css("transform", "rotate(180deg)");
        $("#force-field").css("transform", "rotate(90deg)");
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
        $("#force-field").css("transform", "rotate(135deg)");
        dx += 7;
        dy += 7;
      }

      ship.x += dx;
      ship.y += dy;

      ship.element.css({
        left: ship.x + "px",
        top: ship.y + "px",
      });

      $("#force-field").css({
        left: ship.x - 40 + "px",
        top: ship.y + "px",
      });

      $(document).on("keyup", function (e) {
        if (e.key == " " || e.code == "Space" || e.keyCode == 32) {
          if (canShoot) {
            shoot(ship.x, ship.y, direction);
            canShoot = false;
            setTimeout(function () {
              canShoot = true;
            }, 1000);
          }
        }
      });

      if (checkCollision(ship, coin) && coin.element.is(":visible")) {
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
        gear.element.hide();
        if (!forceField) {
          loseLife();
        }
        kill();
      }

      if (checkCollision(ship, orb) && orb.element.is(":visible")) {
        orb.element.hide();
        $("#force-field").show();
        forceField = true;
        setTimeout(forceFieldDisappears, 10000);
        setTimeout(function () {
          orb.x = Math.floor(
            Math.random() * (window.innerWidth - orb.element.width())
          );
          orb.y = Math.floor(
            Math.random() * (window.innerHeight - orb.element.height())
          );
          orb.element.css({
            left: orb.x + "px",
            top: orb.y + "px",
          });
          orb.element.show();
        }, 20000);
      }
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
  if (!forceField) {
    if (health == 3) $("#heart-3").hide();
    if (health == 2) $("#heart-2").hide();
    if (health == 1) {
      $("#gameover").show();
      $("#heart-1").hide();
    }
    health--;
  }
}

function forceFieldDisappears() {
  forceField = false;
  $("#force-field").hide();
}

function shoot(x, y, direction) {
  // Create a new bullet element
  var bullet = document.createElement("img");
  bullet.src = "Images/Bullet.png";
  bullet.alt = "force field";
  bullet.style.position = "absolute";
  bullet.style.left = x + "px";
  bullet.style.top = y + "px";
  bullet.style.width = "32px";
  bullet.style.height = "32px";
  document.body.appendChild(bullet);

  // Set the end position of the bullet based on the direction
  var x2, y2;
  switch (direction) {
    case "up":
      x = x + 50;
      y = y + 10;
      x2 = x;
      y2 = -bullet.height;
      break;
    case "down":
      x = x + 65;
      y = y + 100;
      x2 = x;
      y2 = window.innerHeight;
      break;
    case "left":
      x = x + 10;
      y = y + 60;
      bullet.style.transform = "rotate(-90deg)";
      x2 = -bullet.width;
      y2 = y;
      break;
    case "right":
      x = x + 100;
      y = y + 60;
      bullet.style.transform = "rotate(90deg)";
      x2 = window.innerWidth;
      y2 = y;
      break;
    default:
      console.log("Invalid direction");
      return;
  }
  console.log(direction);
  // Add the CSS animation to the bullet
  bullet.style.animationName = "glide-" + direction;
  bullet.style.animationDuration = "1s";
  bullet.style.animationTimingFunction = "linear";
  bullet.style.animationFillMode = "forwards";

  // Add the keyframes for the CSS animation
  var style = document.createElement("style");
  style.innerHTML =
    "@keyframes glide-" +
    direction +
    " { from { left: " +
    x +
    "px; top: " +
    y +
    "px; } to { left: " +
    x2 +
    "px; top: " +
    y2 +
    "px; } }";
  document.head.appendChild(style);

  var checkCollisions = setInterval(function () {
    var gear = document.getElementById("gear");
    var bulletRect = bullet.getBoundingClientRect();
    var gearRect = gear.getBoundingClientRect();
    if (
      bulletRect.left < gearRect.right &&
      bulletRect.right > gearRect.left &&
      bulletRect.top < gearRect.bottom &&
      bulletRect.bottom > gearRect.top
    ) {
      let x = gear.x;
      let y = gear.y;
      console.log("Hit!");
      bullet.remove();
      enemy -= 20;
      handleHealthBar();
      if (enemy == 0) {
        $("#gear").hide();
        explosion = {
          x: x,
          y: y,
          element: $("#explosion"),
        };
        console.log("gets here");
        console.log(x);
        console.log(y);
        explosion.element.css({
          left: x + 25 + "px",
          top: y + 20 + "px",
        });
        $("#explosion").show();

        setTimeout(function () {
          $("#explosion").hide();
        }, 1000);

        setTimeout(function () {
          gear.x = Math.floor(
            Math.random() * (window.innerWidth - $("#gear").width())
          );
          gear.y = Math.floor(
            Math.random() * (window.innerHeight - $("#gear").height())
          );
          enemy = 100;
          $("#health-5").show();
          $("#gear").show();
        }, 5000);
      }
    }
    if (!document.body.contains(bullet)) {
      clearInterval(checkCollisions);
    }
  }, 10);

  setTimeout(function () {
    bullet.remove();
  }, 2000);
}

function setHealthBarPosition() {
  health5 = {
    x: gear.x,
    y: gear.y,
    element: $("#health-5"),
  };

  health5.element.css({
    left: gear.x + 40 + "px",
    top: gear.y + 80 + "px",
  });

  health4 = {
    x: gear.x,
    y: gear.y,
    element: $("#health-4"),
  };

  health4.element.css({
    left: gear.x + 40 + "px",
    top: gear.y + 80 + "px",
  });

  health3 = {
    x: gear.x,
    y: gear.y,
    element: $("#health-3"),
  };

  health3.element.css({
    left: gear.x + 40 + "px",
    top: gear.y + 80 + "px",
  });

  health2 = {
    x: gear.x,
    y: gear.y,
    element: $("#health-2"),
  };

  health2.element.css({
    left: gear.x + 40 + "px",
    top: gear.y + 80 + "px",
  });

  health1 = {
    x: gear.x,
    y: gear.y,
    element: $("#health-1"),
  };

  health1.element.css({
    left: gear.x + 40 + "px",
    top: gear.y + 80 + "px",
  });
}

function handleHealthBar() {
  if (enemy == 100) {
    $("#health-5").show();
    $("#health-4").hide();
    $("#health-3").hide();
    $("#health-2").hide();
    $("#health-1").hide();
  } else if (enemy == 80) {
    $("#health-5").hide();
    $("#health-4").show();
    $("#health-3").hide();
    $("#health-2").hide();
    $("#health-1").hide();
  } else if (enemy == 60) {
    $("#health-5").hide();
    $("#health-4").hide();
    $("#health-3").show();
    $("#health-2").hide();
    $("#health-1").hide();
  } else if (enemy == 40) {
    $("#health-5").hide();
    $("#health-4").hide();
    $("#health-3").hide();
    $("#health-2").show();
    $("#health-1").hide();
  } else if (enemy == 20) {
    $("#health-5").hide();
    $("#health-4").hide();
    $("#health-3").hide();
    $("#health-2").hide();
    $("#health-1").show();
  } else {
    $("#health-5").hide();
    $("#health-4").hide();
    $("#health-3").hide();
    $("#health-2").hide();
    $("#health-1").hide();
  }
}

function spawnRocks() {
  rock1 = {
    x: Math.floor(Math.random() * (window.innerWidth - $("#rock-1").width())),
    y: Math.floor(Math.random() * (window.innerHeight - $("#rock-1").height())),
    element: $("#rock-1"),
  };

  rock1.element.css({
    left: rock1.x + "px",
    top: rock1.y + "px",
  });

  rock2 = {
    x: Math.floor(Math.random() * (window.innerWidth - $("#rock-2").width())),
    y: Math.floor(Math.random() * (window.innerHeight - $("#rock-2").height())),
    element: $("#rock-2"),
  };

  rock2.element.css({
    left: rock2.x + "px",
    top: rock2.y + "px",
  });
}

function clouds() {
  cloud1 = {
    x: Math.floor(Math.random() * (window.innerWidth - $("#cloud-1").width())),
    y: Math.floor(
      Math.random() * (window.innerHeight - $("#cloud-1").height())
    ),
    element: $("#cloud-1"),
  };

  cloud1.element.css({
    left: cloud1.x + "px",
    top: cloud1.y + "px",
  });

  cloud2 = {
    x: Math.floor(Math.random() * (window.innerWidth - $("#cloud-2").width())),
    y: Math.floor(
      Math.random() * (window.innerHeight - $("#cloud-2").height())
    ),
    element: $("#cloud-2"),
  };

  cloud2.element.css({
    left: cloud2.x + "px",
    top: cloud2.y + "px",
  });

  cloud3 = {
    x: Math.floor(Math.random() * (window.innerWidth - $("#cloud-3").width())),
    y: Math.floor(
      Math.random() * (window.innerHeight - $("#cloud-3").height())
    ),
    element: $("#cloud-3"),
  };

  cloud3.element.css({
    left: cloud3.x + "px",
    top: cloud3.y + "px",
  });
}

function moveSpinner() {
  var spinner = $("#gear");
  var ship = $("#ship");

  // Calculate the distance between the spinner and the ship
  var dx = ship.offset().left - spinner.offset().left;
  var dy = ship.offset().top - spinner.offset().top;
  var distance = Math.sqrt(dx * dx + dy * dy);

  // Calculate the duration of the animation based on the distance
  var duration = distance / 100;

  // Update the animation duration
  spinner.animate(
    {
      left: ship.offset().left,
      top: ship.offset().top,
    },
    duration * 1000,
    function () {
      // Readjust the position of the spinner
      moveSpinner();
    }
  );
}

function kill() {
  console.log("got here");
  let x = gear.x;
  let y = gear.y;
  // $("#gear").hide();
  $("#health-5").hide();
  $("#health-4").hide();
  $("#health-3").hide();
  $("#health-2").hide();
  $("#health-1").hide();

  explosion = {
    x: x,
    y: y,
    element: $("#explosion"),
  };

  explosion.element.css({
    left: x + 25 + "px",
    top: y + 20 + "px",
  });

  $("#explosion").show();

  console.log("explosion");

  setTimeout(function () {
    $("#explosion").hide();
  }, 1000);

  setTimeout(function () {
    gear.x = Math.floor(
      Math.random() * (window.innerWidth - $("#gear").width())
    );
    gear.y = Math.floor(
      Math.random() * (window.innerHeight - $("#gear").height())
    );
    enemy = 100;

    $("#health-5").show();

    $("#gear").show();
  }, 5000);
}
