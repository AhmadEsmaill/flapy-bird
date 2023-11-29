let bird = document.getElementById("bird");
let pipe = document.getElementById("pipe");
let score = 0;

let gameContainer = document.getElementById("game-container");

let gravity = 4;
let jump = 100;

function applyGravity() {
  let birdTop = parseInt(window.getComputedStyle(bird).getPropertyValue("top"));
  bird.style.top = birdTop + gravity + "px";
}

function jumpBird() {
    let birdTop = parseInt(window.getComputedStyle(bird).getPropertyValue("top"));
    bird.style.top = (birdTop - jump) + "px";
  }

document.addEventListener("keydown", function(event) {
  if (event.code === "Space") {
    jumpBird();
  }
});

document.addEventListener("keydown", function(event) {
    if (event.code === "Space") {
      bird.style.transform = "translate(0, 50%) rotate(-30deg)"; 
      setTimeout(function() {
        bird.style.transform = "translate(0, 50%)"; 
      }, 300); 
    }
  });

  document.addEventListener("click", function() {
    jumpBird();
    bird.style.transform = "translate(0, 50%) rotate(-30deg)"; 
    setTimeout(function() {
      bird.style.transform = "translate(0, 50%)"; 
    }, 300); 
  });




let gameLoop = setInterval(function() {
    applyGravity();
  
    let pipeLeft = parseInt(window.getComputedStyle(pipe).getPropertyValue("left"));
    pipe.style.left = pipeLeft - 5 + "px";
  
    if (pipeLeft < -80) {
      pipe.style.left = "400px";
      score++;
    }
  
    let birdTop = parseInt(window.getComputedStyle(bird).getPropertyValue("top"));
    let birdLeft = parseInt(window.getComputedStyle(bird).getPropertyValue("left"));
    let pipeTop = parseInt(window.getComputedStyle(pipe).getPropertyValue("top"));
    let pipeBottom = pipeTop + parseInt(window.getComputedStyle(pipe).getPropertyValue("height"));
  
    if (
      birdTop + 1.3* bird.offsetHeight >= pipeTop && birdTop <= pipeBottom &&
      birdLeft + bird.offsetWidth >= pipeLeft && birdLeft <= pipeLeft + pipe.offsetWidth
    ) {
      clearInterval(gameLoop);
      alert("Game Over!");
    }
    document.getElementById("score").innerText = "Score: " + score;
  }, 20);