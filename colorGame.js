var number = 6;
var colors = randomColorGenerator(number);
var pickedColor = randomPickedColor();
var displayBox = document.querySelectorAll(".colorBox");
var displayColor = document.getElementById('displayColor');
displayColor.textContent = pickedColor;
var message = document.querySelector("#message");
var h1 = document.querySelector("h1");
var button = document.querySelector("#btn");
var b1 = document.querySelector("#b1");
var b2 = document.querySelector("#b2");

for (var i = 0; i < displayBox.length; i++) {
	displayBox[i].style.backgroundColor = colors[i];
	displayBox[i].addEventListener("click",function(){
		var clickedColor = this.style.backgroundColor;
		console.log(pickedColor,clickedColor);
		if (pickedColor === clickedColor) {
			message.textContent = "Correct!!!";
			h1.style.backgroundColor = clickedColor;
			changeColors(clickedColor);
		}
		else{
			this.style.backgroundColor = "#232323";
			message.textContent = "Try Again!!!";
		}
	});
}

b1.addEventListener("click", function(){
	if (b1.style.backgroundColor != "blue") {
		b1.style.backgroundColor = "blue";
		b2.style.backgroundColor = "#f2f2f2";	
	}
	number=3;
	colors = randomColorGenerator(number);
	pickedColor = randomPickedColor();
	displayColor.textContent = pickedColor;
	for (var i = 0; i < displayBox.length; i++) {
		if (i<3) {
			displayBox[i].style.backgroundColor = colors[i];
		}else{
			displayBox[i].style.display = "none";
		}
	}
	h1.style.backgroundColor = "#232323";
	/*displayBox[i].addEventListener("click",function(){
		var clickedColor = this.style.backgroundColor;
		console.log(pickedColor,clickedColor);
		if (pickedColor === clickedColor) {
			message.textContent = "Correct!!!";
			h1.style.backgroundColor = clickedColor;
			changeColors(clickedColor);
		}
		else{
			this.style.backgroundColor = "#232323";
			message.textContent = "Try Again!!!";
		}
	});*/
});

b2.addEventListener("click", function(){
	h1.style.backgroundColor = "#232323";
	if (b2.style.backgroundColor != "blue") {
		b2.style.backgroundColor = "blue";
		b1.style.backgroundColor = "#f2f2f2";
	}
	number = 6;
	colors = randomColorGenerator(number);
	pickedColor = randomPickedColor();
	displayColor.textContent = pickedColor;
	for (var i = 0; i < displayBox.length; i++) {
		displayBox[i].style.display = "block";
		displayBox[i].style.backgroundColor = colors[i];
	}
});

button.addEventListener("click",function(){
    colors = randomColorGenerator(number);
    pickedColor = randomPickedColor();
	displayColor.textContent = pickedColor;
	for (var i = 0; i < displayBox.length; i++) {
		displayBox[i].style.backgroundColor = colors[i];
	}
	h1.style.backgroundColor = "#232323";
});

function changeColors(color){
	for (var i = 0; i < displayBox.length; i++) {
		displayBox[i].style.backgroundColor = color;
	}
}
//for pickig up a random color
function randomPickedColor(){
	var rC = Math.floor(Math.random() * colors.length);
	return colors[rC];
}

function randomColorGenerator(num){
	var arr = [];
	for (var i = 0; i < num; i++) {
		arr.push(randomColor());
	}
	/*console.log("aaaaaa",arr);*/
	return arr;
}

function randomColor(){
	var r =  Math.floor(Math.random() *256 );		
	var g =  Math.floor(Math.random() *256 );
	var b =  Math.floor(Math.random() *256 );
	return "rgb(" + r + ", " + g + ", " + b + ")";
}