$(document).ready(function() {

var targetNumber;
var rupeeValue;
var rupeeDisplay;
var counter = 0;
var wins = 0;
var losses = 0;


var rupeeImage = [
    { value: Math.floor(Math.random() * 12) + 1,
  	image: 'assets/images/green-rupee.png'}, 
    { value: Math.floor(Math.random() * 12) + 1,
  	image: 'assets/images/blue-rupee.png'}, 
    { value: Math.floor(Math.random() * 12) + 1,
  	image: 'assets/images/purple-rupee.png'},
    { value: Math.floor(Math.random() * 12) + 1,
  	image: 'assets/images/yellow-rupee.png'} 
];

	function random() {
		targetNumber = Math.floor(Math.random() * 100) + 20;
		$(".number").html(targetNumber);
		console.log(targetNumber);
	}


	random();

	function value() {
		counter= 0;
		$(".total").append(counter);
		console.log(counter);
	}

		for (var i = 0; i < rupeeImage.length; i++) {
			rupeeDisplay = $("<img>");
			rupeeDisplay.addClass("rupee-image");
			rupeeDisplay.attr("data-rupeevalue", rupeeImage[i].value);
			rupeeDisplay.attr("src", rupeeImage[i].image);
			$(".images").append(rupeeDisplay);
			console.log(rupeeDisplay);
		}
		function start() {
			$(".rupee-image").on("click", function () {
			rupeeValue = ($(this).attr("data-rupeevalue"));
		    rupeeValue = parseInt(rupeeValue);
		    console.log(rupeeValue);

		    counter += rupeeValue;

		    $(".total").html(counter);
		 	
		 	if (counter === targetNumber) {
		      alert("You win!");
		      wins++;
		      $("#wins").html(wins);
		      $(".number").empty();
		      $(".total").empty();
		      random ();
		      value ();
		    }

		    else if (counter >= targetNumber) {
		      alert("You lose!!");
		      losses++;
		      $("#losses").html(losses);
		      $(".number").empty();
		      $(".total").empty();
		      random ();
		      value ();
		    }

			});
		}

		start();

	});


//assign a click function to each image


//create a function that adds value to the counter


//create an if/else if that says if counter = target number,
//then add to wins, if not add to losses


//create an if/else that says once wins or losses is displayed,
//then reset values and run fuctions