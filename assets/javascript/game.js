
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

var targetNumber;
var rupeeValue;
var counter = 0;
var wins = "";
var losses = "";

console.log(rupeeImage[0].value)


//function to generate a random number for the target number 
var targetNumber = Math.floor(Math.random() * 100) + 20;
$("#number").html(targetNumber);
console.log(targetNumber);

//display images
for (var i = 0; i < rupeeImage.length; i++) {
	var rupeeDisplay = $("<img>");
	rupeeDisplay.addClass("rupee-image");
	rupeeDisplay.attr("data-rupeevalue", rupeeImage[i].value);
	rupeeDisplay.attr("src", rupeeImage[i].image);
	$(".images").append(rupeeDisplay);
	console.log(rupeeDisplay);
}

//display each image's value
$(".rupee-image").on("click", function() {
	var rupeeValue = ($(this).attr("data-rupeevalue"));
    rupeeValue = parseInt(rupeeValue);
    console.log(rupeeValue);

});




//assign a click function to each image


//create a function that adds value to the counter


//create an if/else if that says if counter = target number,
//then add to wins, if not add to losses


//create an if/else that says once wins or losses is displayed,
//then reset values and run fuctions