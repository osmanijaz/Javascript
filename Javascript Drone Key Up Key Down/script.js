var drone = document.querySelector(".drone");
var container = document.querySelector(".container");

let keys = {
  ArrowUp: false,
  ArrowDown: false,
  ArrowRight: false,
  ArrowLeft: false,
};

let player = {
    speed: 5,
}

document.addEventListener("keydown", pressOn);
document.addEventListener("keyup", pressOff);
document.addEventListener("DOMContentLoaded", start);


function start(){
    player.x = drone.offsetLeft;
    player.y = drone.offsetTop;
}

  window.requestAnimationFrame(playGame);

function pressOn(e) {
  e.preventDefault();
  keys[e.key] = true;
}

function pressOff(e) {
  e.preventDefault();
    drone.style.transform = "rotate(0deg)"
    keys[e.key] = false;
}

function playGame() {
let area = container.getBoundingClientRect();
  if (keys.ArrowUp && player.y > area.top) {
    player.y -= player.speed;
  }
  if (keys.ArrowDown && player.y < area.bottom - 110) {
    player.y += player.speed;
  }
  if (keys.ArrowLeft && player.x > 0) {
      drone.style.transform = "rotate(-20deg)"
      player.x -= player.speed;
    }
    if (keys.ArrowRight && player.x < area.width - 160) {
      drone.style.transform = "rotate(20deg)"
    player.x += player.speed;
  }
  drone.style.left = player.x + "px";
  drone.style.top = player.y + "px";
  window.requestAnimationFrame(playGame);
}
