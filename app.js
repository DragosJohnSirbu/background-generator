var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.querySelector("#gradient"); 
var ranBtn = document.querySelector("#randomize");


function init(){
	body.style.background = randomize();
	css.textContent = body.style.background + ";";
	css.style.color = randomize();
	
}
init();
color1.addEventListener("input",changeBack);

color2.addEventListener("input", changeBack);

ranBtn.addEventListener("click", randomize);
	
function changeBack(){
	body.style.background = "linear-gradient(to right, "+color1.value+", "+color2.value+")";
	css.style.color = randomize;
} 
function randomColors() {
	var randomColor1 = Math.floor((Math.random()*255));
	var randomColor2 = Math.floor((Math.random()*255));
	var randomColor3 = Math.floor((Math.random()*255));
	return "rgb(" + randomColor1 + ", " + randomColor2 + ", " + randomColor3 + " )" 
}
function randomize(){
	body.style.background = "linear-gradient(to right, "+ randomColors() +", " + randomColors() + ")";
	css.textContent = body.style.background + ";";
}
