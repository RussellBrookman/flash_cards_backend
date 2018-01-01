// var basicCard = require("./basicCard.js"); 
// var args = process.argv[2];
//  	console.log(args);  

// // constructor, create objects 
// function flashCards(question, answer) {   
// 	this.question = question;   
// 	this.answer = answer;
//  // printInfo method 
//  	this.printInfo = function() {     
//  		console.log("Question: " + this.question + "\nAnswer: " + this.answer);   
//  	}; 
//  } 



function ClozeCard(front, back, cloze) {
	
    this.front = front;
    this.back = back;
    this.cloze = cloze;
  if (this instanceof ClozeCard) {

    if (this.back.includes(this.cloze)){
      this.partial = this.back.replace(cloze, '...');
    } else {
      this.throwError();
    }

  } else {
    return new ClozeCard(text, cloze);
  }
};

ClozeCard.prototype.throwError = function() {
  console.log(`The string '${this.cloze}' does not exist in '${this.back}'`);
}

module.exports = ClozeCard;