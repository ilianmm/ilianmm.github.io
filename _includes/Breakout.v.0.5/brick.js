/**
* Brick object housing single brick logic
*/
function Brick(x, y, width, height, status, collisionPhysics) {
	this.x = x;
	this.y = y;

	// default colour
	// @TODO: Find a better way to define colour swaps
	this.color = "#0085DD";

	this.status = status;

	this.width = width;
	this.height = height;
	this.collisionPhysics = collisionPhysics;

	/**
	* Changes colour of brick depending on status
	*
	* @TODO: Find a better way to define colour swaps
	*/
	this.colorise = function () {
		if (brick.status == 1) {
			return "#0085DD";
		} else if(brick.status==2) {
			return "#FF0000";						
		};

	};

	/** 
	* Defines ball collision behaviour when hitting a brick
	* 
	* @NOTE: If CollisionPhysics is enabled,then collision bounce angle will depend on the point of inpact
	* between the ball and the brick, otherwise all bounces have 90% angles.
	* 
	* @TODO: allow user to enable and disable at beginning of game
	* @return: boolean
	*/
	this.collision = function (ball) {
		if (this.status != 0 ) {
			if (ball.x >= this.x-ball.radius && ball.x <= this.x + this.width + ball.radius 
				&& ball.y >= this.y-ball.radius && ball.y <= this.y+this.height + ball.radius) {

				if (this.collisionPhysics) {
					var percentage = (ball.x - this.x)/this.width;
					ball.dx = (percentage * ball.dxRange) - (ball.dxRange/2);
				};
				
				ball.dy = -ball.dy;
				this.status--;
				return true;
			};
		} else {
			return false;
		};
	};
}