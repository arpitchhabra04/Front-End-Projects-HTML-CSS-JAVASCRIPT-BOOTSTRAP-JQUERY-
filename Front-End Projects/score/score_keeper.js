var p1button = document.getElementById("p1");
var p2button = document.getElementById("p2");
var resetButton = document.getElementById("reset");
var p1display = document.getElementById("p1display");
var p2display = document.getElementById("p2display");
var num   = document.querySelector("input");
var changeScore = document.querySelector("p span");
var gameOver = false;
var winningScore = 5; //yeha num.input kiya toh change kyunhi hua??

var p1score = 0; //0 kyuki pehle koi bhi value ho sakti hai toh define krna better hai
var p2score = 0;



p1button.addEventListener("click" , function(){
	if (!gameOver) {
		p1score++;
		if(p1score === winningScore){
			gameOver = true; // taki score game over ke baad increase na kre
		p1display.classList.add("winner");
		}
	p1display.textContent = p1score;
	}
	
});

p2button.addEventListener("click" , function(){
	if (!gameOver) {
			p2score++;
			if (p2score === winningScore) {
				gameOver = true;
				p2display.classList.add("winner");
			}
			p2display.textContent = p2score;
	}

});

resetButton.addEventListener("click" , function(){
	p1score = 0;
	p2score = 0;
	p1display.textContent = 0;
	p2display.textContent = 0;
	p1display.classList.remove("winner");
	p2display.classList.remove("winner");
	gameOver = false;
	
});

function resetgame(){   // to restart the game if input is changed in between
	p1score = 0;
	p2score = 0;
	p1display.textContent = 0;
	p2display.textContent = 0;
	p1display.classList.remove("winner");
	p2display.classList.remove("winner");
	gameOver = false;
}


num.addEventListener("change" , function(){

	changeScore.textContent = num.value;  //ye naya hai, bhai ne btaya. input se value le ke change kr dega
	winningScore =Number(num.value);
	resetgame();
    
})
