// A Collection of Functions supporting brick logic //

/**
* Itterates throuvh bricks array and checks for collision with ball. 
* If ball colides with brick, the score is increased, 
* check for level completion and respawns paddle/ball,
* and win alert is displayed if all levels are completed.
*/
function collisionDetection() {
				for(c=0; c<BRICK_COLS; c++) {
					for(r=0; r<BRICK_ROWS; r++) {
						brick = bricks[c][r];
						if (brick.collision(ball)) {
							score++;
							if (score == maxScore) {
								if(level != winLevel) {
									alert("You passed level " + level + "!");
									level++;
									respawn();
									generateBricks();
								} else {
									alert("You WIN! Congratulations!");
									document.location.reload();	
								};
							};
						};
					};
				};
			};

/**
* Iterates through array[c][r] and draws bricks
*/
function drawBricks() {
	for (c=0; c<BRICK_COLS; c++) {
		for (r=0; r<BRICK_ROWS; r++) {
			if (bricks[c][r].status != 0) {
				brick = bricks[c][r];
				brick.x = (c*(BRICK_WIDTH+BRICK_PADDING)+BRICK_OFFSET_LEFT);
				brick.y = (r*(BRICK_HEIGHT+BRICK_PADDING)+BRICK_OFFSET_TOP);
				ctx.beginPath();
				ctx.rect(brick.x, brick.y, brick.width, brick.height);
				ctx.fillStyle = brick.colorise();
				ctx.fill();
				ctx.closePath();
			};
		};
	};
};

/** 
* Iterates through array[c][r] and generates brick objects to fill canvas
*/
function generateBricks() {
	for (c=0; c<BRICK_COLS; c++) {
		bricks[c] = [];
		for(r=0; r<BRICK_ROWS; r++) {
			status = randomiseBrick(c,r);
			if (status == 1) {
				maxScore++;
			} else if(status == 2) {
				maxScore = maxScore+2;
			};
			bricks[c][r] = new Brick (0, 0, BRICK_WIDTH, BRICK_HEIGHT, status, BRICK_COLLISION_PHYSICS);
		};
	};
};

/** 
* Defines status of brick
* @TODO: Make a more sophisticated progressing system and randomisation system
*
* @param (1): brick columns
* @param (2): brick rows
*
* @return: brick status integer
*/
function randomiseBrick(c, r) {
	if (level == 1) {
		switch(r){
			case 0: return 1;
			default: return 0;
		};
	} else {
		switch (r) {
			default: return randomise();
		};
	};
};

/** 
* Provides random status for bricks based set probabilities
*
* @return: randomised brick status
*/
function randomise() {
	if (Math.floor(Math.random()*5)+1 == 1) {
		return 0;
	} else if (Math.floor(Math.random()*4)+1 == 1) {
		return 2;
	} else {
		return 1;
	};
};