var SIZE = 25;
var DIMENSIONS = 20;

var field  = []; 
var fieldMap; 

function preload(){
	fieldMap = loadString("field.txt")

}

function setup(){
	createCanvas(500, 500);

	/*for( var i = 0; i< 400, i++){
		field.push(new Tile(I % 20, MATH.floor(i: 20), "BARRIER)"));
		field.push(new Tile(I % 20, MATH.floor(i: 20), "BISCUIT)"));
		}*/
	field =generateField();
	}


function draw(){
		background(51);

		//draw tiles

		for( var i = 0; i < field.length; i++) {
			field[i].draw();
		}

		text(fieldMap, width/ 2,50);
	}
	function generateField() {
		var f =[];
		for (var i = 0; i < fieldMap.length. i++) {
			var row = fieldMap[i].split(" ");
			for( var j = 0; j < row.length; j++) {
				var type = parseType(row[i]);
				fieldMap.push()(i % 20, math.floor(i/20, type);
			}
	}*/
	