function drawLives() {
    ctx.font = "16px Arial";
    ctx.fillStyle = "#0095DD";
    ctx.fillText("Lives: " + lives, canvas.width-65, 20);
};

function drawScore() {
	ctx.beginPath();
	ctx.font = "16px Arial";
	ctx.fillStyle = "#0095DD";
	ctx.fillText("Score: "+score, 8, 20);
	ctx.closePath();
};

function keyDownHandler(e) {
	if(e.keyCode==39) {
		rightPressed = true;
	} else if (e.keyCode==37) {
		leftPressed = true;
	} else if (e.keyCode==32) {
		pausePressed = !pausePressed;
	} else if (e.keyCode==13 || e.keyCode==38) {
		console.log("startPressed=" + startPressed);
		startPressed = true;
	};
};

function keyUpHandler(e) {
	if(e.keyCode==39) {
		rightPressed = false;
	} else if (e.keyCode==37) {
		leftPressed = false;
	} else if (e.keyCode==32) {
	};
};

function mouseMoveHandler(e) {
	if (!pausePressed) {
		var relativeX = e.clientX - canvas.offsetLeft;
		if(relativeX-paddle.width/2 > 0 && relativeX+paddle.width/2 < canvas.width) {
			paddle.x = relativeX - paddle.width/2;
			if(!startPressed) {
				ball.x = relativeX;
			};
		};
	};
};

function isDead() {
	if (lives-1 < 1) {
		lives--;
		return true;
	} else {
		lives--;
		respawn();
	    return false;
	};
};

function respawn() {
	ball.x = canvas.width/2;
	ball.y = BALL_Y_MARGIN;
	ball.dx = ball.startDX;
	ball.dy = ball.startDY;
	paddle.x = PADDLE_START_X;
	startPressed = false;
};