/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

/* LOOPS */

    /*FOR*/
/*exercise 2*/
var i;
for (i = 5; i < 10; i++) {
    console.log(i);
}

/*exercise 3 */
var i;
for (i = 5; i <= 50; i = i + 5) {
    console.log(i);
}

/*exercise 4 */
var i;
for (i = 10; i > 0; i--) {
    console.log(i);
}
/*exercise 5 */
var text;
var food = ["Pizza", "Beans", "Tacos", "Fish", "Chicken"];
var i;
for (i = 0; i < food.length; i++) {
    text=food[i];
    console.log(text);
}
/*exercise 6 */
var text;
var i;
for (i = 1; i < 10; i = i + 2) {
    text =i;
    console.log(text)
}

    /*SWITCH */
/*exercise 2 */
var i = 5;
while (i < 10) {
    console.log(i);
    i++;
}

/*exercise 3*/

var i = 5;
while (i < 50) {
    console.log(i);
    i=i+5;
}

/*exercise 4 */
var i = 10;
while (i >=0) {
    console.log(i);
    i--;
}

     /*BREAK AND CONTINUE*/
/*exercise 1*/
var i;
for (i = 1; i < 10; i++) {
    console.log(i);
    if(i==5)
        {
            break;
        }
}

/*exercise 2&3 combined */
var i;
for (i = 1; i < 10; i++) {
      if(i==5 || i==7)
        {
            continue;
        }
    console.log(i)
}

/*exercise 4*/
var cars = ["BMW", "Volvo", "Saab", "Ford"];
var text;
var i;
for (i = 0; i < cars.length; i++) {
    if(i==2)
        {
            continue;
        }
    console.log(cars[i]);
}















