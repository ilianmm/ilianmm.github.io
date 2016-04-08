/**
* Ball object used for all ball interactions 
*/
function Ball(x, y, radius, color) {
	this.x = x;
	this.y = y;

	this.dx = 6;
	this.dy = -6;
	this.dxRange = this.dx*2;
	
	this.startDX = 6;
	this.startDY = -6;

	this.radius = 10;

	this.color = color;

	/** 
	* Draws ball in canvas 
	*/
	this.draw = function(context) {
		context.save();
		
		context.translate(this.x, this.y);
	  
		context.fillStyle = this.color;
		
		context.beginPath();
		context.arc(0, 0, this.radius, 0, (Math.PI * 2), true);
		context.fill();
		context.closePath();
		context.restore();
	};

	/**
	* Defines collision behaviour with canvas borders 
	*/
	this.bound = function(canvas) {
		if ((this.x + this.dx >= (canvas.width - this.radius)) ||
			(this.x + this.dx <= this.radius)) {
			this.dx = -this.dx;
		} else if ((this.y + this.dy) <= this.radius) {
			this.dy = -this.dy;
		};
	};


}