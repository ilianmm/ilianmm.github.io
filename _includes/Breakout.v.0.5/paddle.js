function Paddle(x, y, width, height, color) {
	this.x = x;
	this.y = y;
	this.dx = 7;
	
	this.width = width;
	this.height = height;
	this.color = color;

	this.draw = function(context) {
		context.beginPath();
		context.rect(this.x, this.y, this.width, this.height);
		context.fillStyle = this.color;
		context.fill();
		context.closePath();
		context.restore();
	};

	this.collide = function(ball) {
		if ((ball.y+ball.radius>=this.y) 
			&& (ball.x > (this.x - ball.radius) && ball.x < this.x + this.width + ball.radius)) {
			var percentage = (ball.x - this.x) / this.width;
			ball.dx = (percentage * ball.dxRange) - (ball.dxRange/2);
			ball.dy = -ball.dy;
		};
	};
}