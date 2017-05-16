$(document).ready(function() {

var targetNumber;
var randomNumber;
var rupeeValue;
var rupeeDisplay;
var counter = 0;
var wins = 0;
var losses = 0;

var rupeeImage = [
    { image: 'assets/images/green-rupee.png' }, 
    { image: 'assets/images/blue-rupee.png' }, 
    { image: 'assets/images/purple-rupee.png' },
    { image: 'assets/images/yellow-rupee.png' }
];

	function randomValue() {
		randomNumber = Math.floor(Math.random() * 12) + 1;
	}

	function randomTarget() {
		targetNumber = Math.floor(Math.random() * 100) + 20;
		$(".number").html(targetNumber);
	}


	randomTarget();

	function value() {
		counter= 0;
		$(".total").append(counter);
	}

		function images () {
			for (var i = 0; i < rupeeImage.length; i++) {
				randomValue ();
				rupeeDisplay = $("<img>");
				rupeeDisplay.addClass("rupee-image");
				rupeeDisplay.attr("data-rupeevalue", randomNumber);
				rupeeDisplay.attr("src", rupeeImage[i].image);
				$(".images").append(rupeeDisplay);
			}
		}

		function start() {
			$(".rupee-image").on("click", function () {
			rupeeValue = ($(this).attr("data-rupeevalue"));
		    rupeeValue = parseInt(rupeeValue);

		    counter += rupeeValue;

		    $(".total").html(counter);
		 	
		 	if (counter === targetNumber) {
		      alert("You win!");
		      wins++;
		      $("#wins").html(wins);
		      $(".number").empty();
		      $(".total").empty();;
		      $(".images").empty();
		      $(".images").attr("data-rupeevalue", randomNumber);
		      images ();
		      randomValue ();
		      start ();
		      randomTarget ();
		      value ();
		    }

		    else if (counter >= targetNumber) {
		      alert("You lose!!");
		      losses++;
		      $("#losses").html(losses);
		      $(".number").empty();
		      $(".total").empty();
		      $(".images").empty();
		      $(".images").attr("data-rupeevalue", randomNumber);
		      images ();
		      randomValue ();
		      start ();		      
		      randomTarget ();
		      value ();
		    }

			});
		}

		images ();		

		start();


	});


//assign a click function to each image


//create a function that adds value to the counter


//create an if/else if that says if counter = target number,
//then add to wins, if not add to losses


//create an if/else that says once wins or losses is displayed,
//then reset values and run fuctions