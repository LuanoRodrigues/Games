VAR TYPES = ["BARRIER","OPEN", "BISCUIT", "CHERRY"];

var HALF_SIZE = SIZE/2;
var THIRD_SIZE = SIZE/3;
var QUARTER_SIZE = SIZE/4;
function Tile(x,y,type) {

	this.x = x;
	this.y = y;
	this.type = type;
}

Tile.prototype.draw =function () {
	switch (this.type) {

		case "BARRIER":

			strokeWeight(5);
			stroke(0);
			fill("#0000FF");
			rect(this.x*SIZE, this.y*SIZE, SIZE*2/3, SIZE*2/3);
			break;

		case "BISCUIT":
			ellipseMode (CORNER);
			noStroke();
			fill(255);
			ellipse(this.x *SIZE + THIRD_SIZE, this.y *SIZE + THIRD_SIZE, THIRD_SIZE )
			break;
		
		case "CHERRY":
			ellipseMode (CORNER);
			Stroke(255);
			strokeWeight(2);
			fill("#FF2222");
			ellipse(this.x *SIZE + QUARTER_SIZE, this.y *SIZE + QUARTER_SIZE, HALF_SIZE )
			break;

	}
};
function parseType (t){
	switch (t)  {
		case "0":
			return "BARRIER"
			break;
		case "1":
			return "OPEN"
			break;
		case "2":
			return "BISCUIT"
			break;
		case "3":
			return "CHERRY"
			break;
	}
}