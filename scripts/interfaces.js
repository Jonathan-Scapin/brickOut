var score = 0;
var lives = 3;
// controles
var rightPressed = false;
var leftPressed = false;

var menu = document.getElementById("menu");
var menuWinner = document.getElementById("winner");
var menuGameOver = document.getElementById("game-over");
var winnerScore = document.getElementById("scoreW");
var gameOverScore = document.getElementById("scoreGO");

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
document.addEventListener("mousemove", mouseMoveHandler, false);

function drawScore() {
    ctx.font = "16px Arial";
    ctx.fillStyle = "#0095DD";
    ctx.fillText("Score: " + score, 8, 20);
}

function drawLives() {
    ctx.font = "16px Arial";
    ctx.fillStyle = "#0095DD";
    ctx.fillText("Lives: " + lives, canvas.width - 65, 20);
}

function keyDownHandler(e) {
    if (e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = true;
    } else if (e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = true;
    }
}

function keyUpHandler(e) {
    if (e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = false;
    } else if (e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = false;
    }
}

function mouseMoveHandler(e) {
    var relativeX = e.clientX - canvas.offsetLeft;
    if (relativeX > 0 && relativeX < canvas.width) {
        paddleX = relativeX - paddleWidth / 2;
    }
}


function startGame() {
    menu.style.display = "none";
    menuGameOver.style.display = "none";
    score = 0;
    stop = false;
    drawBricks();
    draw();
}

function restartGame() {
    menuGameOver.style.display = "none";
    document.location.reload();
}

function winner() {
    menuWinner.style.display = "block";
    winnerScore.innerHTML = score;
}

function gameOver() {
    menuGameOver.style.display = "block";
    gameOverScore.innerHTML = score;
}