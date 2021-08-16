var BasicCard = require('./BasicCard.js');
var inquirer = require("inquirer");
var prompt = require('prompt');

var q1 = new BasicCard("Which game had the first female hero?", "metroid");
var q2 = new BasicCard("What was considered to be the first, side view, RPG platformer?", "simons quest");
var q3 = new BasicCard("What is the first RPG to have voice actors", "ys");
var q4 = new BasicCard("What classic RPG is named after a female and staring a male protagonist", "zelda");

let count = 0;
let cards = [];
let correct = 0;

cards.push(q1);
cards.push(q2);
cards.push(q3);
cards.push(q4);

let questions = function() {
  if (count < cards.length) {
    inquirer.prompt([
    {
      name: "QandA",
      type: "input",
      message: cards[count].front
    }
    ]).then(function(ans) {
      if (ans.QandA == cards[count].back) {
        console.log("You're correct. it was " + cards[count].back);
        count++;
        correct++;
        questions();
      } else {
        console.log("You're wrong. If you spent more time playing video games, and less time being popular, we can avoid these embarrassing situations.")
        count++;
        questions();
      }
    })
  } else {
    console.log("You got " + correct + " right. Thank you for playing.");
  };
};

questions();
