/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

/* CONTROL FLOW */

/*IF ELSE*/

/*exercise 1*/
if(5>2)
  {
    console.log("this is true");
  }

/* exercise 4 */
var firstName = "Greg";

if (firstName === "John") {
    console.log(" hello john");
}
else
  {
    console.log("you are not john");
  }

/*exercise 5*/
var age = 19;

if (age>=18) {
    console.log(" old enough");
}
else
  {
    console.log("you are not old enough");
  }

/*SWITCH*/

/*exercise 1*/
var fruits='Apple'
switch(fruits) {
    case "Banana":
      text = "Banana is good!";
      break;
    case "Orange":
      text = "I am not a fan of orange.";
      break;
    case "Apple":
      text = "How you like them apples?";
      break;
    default:
      text = "I have never heard of that fruit.";
  }
  console.log(text);

/*exercise 4 */
  var text;
 var favCar='BMW'
  switch(favCar) {
    case "BMW":
      text = "German car";
      break;
    case "Ford":
      text = "American car";
      break;
    case "Peugeot":
      text = "French car";
      break;
    default:
      text = "Unknown car name";
  }
  console.log(text)

/*TERNARY OPERATOR */
 var age, voteable;
    age =17;
    voteable = (age < 18) ? "Too young":"Old enough";
    console.log(voteable);

