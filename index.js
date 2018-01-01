var BasicCard = require('./BasicCard.js');
var inquirer = require("inquirer");
var prompt = require('prompt');

var metroid = new BasicCard("Which game had the first female hero?", "metroid");
var simonsQuest = new BasicCard("What was considered to be the first, side view, RPG platformer?", "simons quest");
var ys = new BasicCard("What is the first RPG to have voice actors", "ys");
var wolfenstein = new BasicCard("What was the first, first person shooter?", "wolfenstein3d");

function q1 () {
var question1 = prompt.get([metroid.front], function (err, result) {
  var answer = process.argv.slice(2);
  console.log(answer);
  if (answer === metroid.back) {
    console.log("You're correct. it was " + metroid.back);
  } else {
    console.log("Wrong: If you spent less time with girls and more time playing video games we wouldn't be having these embarrassing situations.");
  }
  q2();
});
}

function q2 () {
var question2 = prompt.get([simonsQuest.front], function (err, result) {
  var answer = process.argv.slice(2);
  console.log(answer);
  if (answer === simonsQuest.back) {
    console.log("You're correct. it was " + simonsQuest.back);
  } else {
    console.log("Wrong: Common man.. Did you even own an Nintendo?");
  }
  q3();
});
}

function q3 () {
  var question3 = prompt.get([ys.front], function (err, result) {
    var answer = process.argv.slice(2);
    console.log(answer);
    if (answer === ys.back) {
      console.log("You're correct. it was " + ys.back);
    } else {
      console.log("Wrong: This was a hard one but a totally classic game.. if you're into that sort of thing.");
    }
    q4();
  });
  }

function q4 () {
  var question4 = prompt.get([wolfenstein.front], function (err, result) {
    var answer = process.argv.slice(2);
    console.log(answer);
    if (answer === wolfenstein.back) {
      console.log("You're correct. it was " + wolfenstein.back);
    } else {
      console.log("Wrong: This one was pretty easy. Maybe this gaming quiz isn't for you.");
    }
    // answersAll();
  });
  }

q1();
