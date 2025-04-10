let canvas;
let character = new Image();
character.src = "images/character.png";
let enemies = [];
let bullets = [];
let score = 0;
let gameOver = false;
let gameStarted = false;
let gamePaused = false;

function init() {
    canvas = document.getElementById("gameCanvas");
    canvas.width = 800;
    canvas.height = 600;
    const ctx = canvas.getContext("2d");

    // Game loop
    function gameLoop() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        // Update game state and render
        requestAnimationFrame(gameLoop);
    }

    gameLoop();
  
}