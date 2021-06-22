var gamePattern = [];

var buttonColors = ["red","blue","green","yellow"];

var userClickedPattern = [];

var level = 0;

var started = false;

var game = false;

function nextSequence(){

	userClickedPattern = [];

	level++;

	$("#level-title").text("Level " + level);

	var randomNumber = Math.floor( Math.random() * 4 );

	var randomChosenColour = buttonColors[ randomNumber ];
	
	gamePattern.push(randomChosenColour);

	$("#"+randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

	playSound(randomChosenColour);

}

function playSound(name){
	var audio = new Audio( "sounds/" + name + ".mp3" );
	audio.play();
}

function aniamatePress(currentColour){

	$("#"+currentColour).addClass("pressed");

	setTimeout( function(){

		$("#"+currentColour).removeClass("pressed");
	} , 100 );
	
}

function checkAnswer(currentLevel){
	if( userClickedPattern[currentLevel] === gamePattern[currentLevel] ){

		if (userClickedPattern.length === gamePattern.length){

			setTimeout(function () {
			  nextSequence();
			}, 1000);

		  }
	}
	else{
		$("h1").text("Game Over, Press Any Key to Restart");

		playSound("wrong");

		$("body").addClass("game-over");

		$("div.start-btn").removeClass("hidden");

		$("div.start-btn button").text("Restart");

		$("div.quit-btn").removeClass("hidden");

		$("div.game-btn").addClass("hidden");

		game=false;

		setTimeout( function(){
			$("body").removeClass("game-over");
		} , 500 );

		startover();
	}
}

function startover(){
	level = 0;
	gamePattern = [];
	started = false;

	$("div.start-btn").removeClass("hidden");
}

function gameStart(){

	if(game==false){
		$("#level-title").text("Level " + level);

		nextSequence();

		game=true;

		$("div.start-btn").addClass("hidden");
		$("div.instructions").addClass("hidden");
		$("div.game-btn").removeClass("hidden");
		$("div.quit-btn").addClass("hidden");
		
	}

}

function gameQuit(){
	$("#level-title").text("Thank You For Playing!! 🥰");
	$("div.start-btn").addClass("hidden");
	$("div.quit-btn").addClass("hidden");
	$("h2").removeClass("hidden");
}

$(".btn1").click( function(){

	var userChosenColour = $(this).attr("id");

	userClickedPattern.push( userChosenColour );

	playSound(userChosenColour);

	aniamatePress(userChosenColour);

	checkAnswer(userClickedPattern.length-1);
}
);

$(document).keypress( function(event){

	if(started==false){
		$("#level-title").text("Level " + level);

		nextSequence();

		started=true;
	}
}
);