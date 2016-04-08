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
function randomiseBrick(c, r) {
	if (level == 1) {
		switch(r){
			case 0: return 1;
			case 1: return 1;
			default: return 0;
		};
	} else {
		switch (r) {
			default: return randomise();
		};
	};
};

function randomise() {
	if (Math.floor(Math.random()*5)+1 == 1) {
		return 0;
	} else if (Math.floor(Math.random()*4)+1 == 1) {
		return 2;
	} else {
		return 1;
	};
};