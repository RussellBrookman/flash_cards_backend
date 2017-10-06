var basicCard = require("./basicCard.js"); 
var args = process.argv[2];
 	console.log(args);  

// constructor, create objects 
function flashCards(question, answer) {   
	this.question = question;   
	this.answer = answer;
 // printInfo method 
 	this.printInfo = function() {     
 		console.log("Question: " + this.question + "\nAnswer: " + this.answer);   
 	}; 
 } 
 // runs inquirer and askes questions. Answers stored in the var answers inside .then 
gameHystory(question).then(function(answers) {   
 	// initializes the variable for the users answers
 	var usersAnswers = new uA(answers.question1, answers.question2, answers.question3, answers.question4); 
 	// if answer is right or wrong, tell them the correct answer  
 	if (args.question1 === "metroid") {
 		console.log("You're right!");
 	} else {
 		console.log("Sorry, Metroid on NES was the first game to have a female hero.");
 	}
 	 if (args.question2 === "simons quest" || "castlevania 2") {
 		console.log("You're right!");
 	} else {
 		console.log("Sorry, Simons Quest on NES was the first side view RPG.");
 	}
 	if (args.question1 === "Ys") {
 		console.log("You're right!");
 	} else {
 		console.log("Sorry, Ys, the Turbo Duo version was the first RPG with voice actors.");
 	}
 	if (args.question1 === "wolfenstein") {
 		console.log("You're right!")
 	} else {
 		console.log("Sorry, Wolfenstein 3D for PC was the first, first person shooter.")
 	}
 	// basicCard.printInfo(); 
 });
module.exports = 
