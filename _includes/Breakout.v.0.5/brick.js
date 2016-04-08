function Brick(x, y, width, height, status, collisionPhysics) {
	this.x = x;
	this.y = y;
	this.color = "#0085DD";

	//if (status==2) {
//		this.color = "#FF0000"; 
//	};

	this.status = status;

	this.width = width;
	this.height = height;
	this.collisionPhysics = collisionPhysics;

	this.colorise = function () {
		if (brick.status == 1) {
			return "#0085DD";
		} else if(brick.status==2) {
			return "#FF0000";						
		};

	};

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