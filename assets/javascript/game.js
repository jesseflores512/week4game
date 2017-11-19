$(document).ready(function() {

var banana1;
var banana2;
var banana3;
var banana4;
var happySpot;
var score = 0;
var wins = 0;
var losses = 0;


	function gameStart() {
		

	// assign random numbers to each banana
		banana1 = Math.floor(Math.random() * 12 + 1);
		console.log("banana 1: " + banana1);
		banana2 = Math.floor(Math.random() * 12 + 1);
		console.log("banana 2: " + banana2);
		banana3 = Math.floor(Math.random() * 12 + 1);
		console.log("banana 3: " + banana3);
		banana4 = Math.floor(Math.random() * 12 + 1);
		console.log("banana 4: " + banana4);
		happySpot = Math.floor(Math.random() * 101 + 19);
		console.log("Happy spot: " + happySpot);

		$("#happySpot").text(happySpot);
		$("#score").text(score);
		$("#wins").text(wins);
		$("#losses").text(losses);

		$("#banana").click(function() {
			score = (score + banana1);
			$('#score').text(score);
		});
		$('#banana2').click(function() {
			score = (score + banana2);
			$('#score').text(score);
		})
		$('#banana3').click(function() {
			score = (score + banana3);
			$('#score').text(score);
		})
		$('#banana4').click(function() {
			score = (score + banana4);
			$('#score').text(score);
		})

	};

	if (wins == 0) {
		gameStart();
	}

	$(this).click(function() {
			if (score == happySpot) {
				wins++;
				$("#result").text("You win! Try again?");
				score = 0;
				gameStart();

			}
			else if (score > happySpot) {
				losses++;
				$("#result").text("Henry is pissed! Try again.");
				score = 0;
				gameStart();
			}

		}) // end victory/loss


});

 
