/**
* Creates Paddle object used by user
* @param (1): x
* @param (2): y
* @param (3): width
* @param (4): height
* @param (4): color
*/
function Paddle(x, y, width, height, color) {
	this.x = x;
	this.y = y;
	this.dx = 7;
	
	this.width = width;
	this.height = height;
	this.color = color;

	/**
	* Draws paddle
	*/
	this.draw = function(context) {
		context.beginPath();
		context.rect(this.x, this.y, this.width, this.height);
		context.fillStyle = this.color;
		context.fill();
		context.closePath();
		context.restore();
	};

	/**
	* Defines ball collision behaviour when hitting the paddle
	*
	* NOTE: Ball bounces at an angle depending on where it connects with the paddle
	*/
	this.collide = function(ball) {
		if ((ball.y+ball.radius>=this.y) 
			&& (ball.x > (this.x - ball.radius) && ball.x < this.x + this.width + ball.radius)) {
			var percentage = (ball.x - this.x) / this.width;
			ball.dx = (percentage * ball.dxRange) - (ball.dxRange/2);
			ball.dy = -ball.dy;
		};
	};
}