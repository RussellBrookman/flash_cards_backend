var basicCard = require("./closeCard.js")
var gameHystory = new basicCard.prompt([{     
 	question: "question1",     
 	message: "Which game had the first female hero?"   
 }, {     
 	quesiton: "question2",     
 	message: "What was considered to be the first, side view, RPG?"   
 }, {     
 	question: "question3",     
 	message: "What is the first RPG to have voice actors?"   
 }, {     
 	question: "question4",     
 	message: "What was the first, first person shooter?"   
 }])
function called basicCard takes front and back as args
define this.front and back
export

// "log the question"
/*console.log(gameHystory.front); 

// "log the answer"
console.log(gameHystory.back); 

var gameHystoryCloze = new ClozeCard(
    "George Washington was the first president of the United States.", "George Washington");

// "George Washington"
console.log(firstPresidentCloze.cloze); 

// " ... was the first president of the United States.
console.log(firstPresidentCloze.partial); "

// "George Washington was the first president of the United States.
console.log(firstPresidentCloze.fullText): "

// Should throw or log an error because "oops" doesn't appear in "This doesn't work"
var brokenCloze = new ClozeCard("This doesn't work", "oops");*/

module.exports = gameHystory;