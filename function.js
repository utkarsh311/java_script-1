/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

 /*  FUNCTION */
/*exercise 1 */
function myFunction() {
    console.log("hello");
 }
myFunction();

/*exercise 3 */

function myFunction() {
    return 5*5
}
var ans= myFunction();
console.log(ans);

/*exercise 4 */

function myFunction(name) {
    return "Hello " + name;
}
console.log(myFunction("john"))

/*exercise 5 */
function tellFortune(jobTitle, geoLocation, partner, numKids) {
    var future = 'You will be a ' + jobTitle + ' in ' + geoLocation + ' and married to ' +
   partner + ' ' + ' with ' + numKids + ' kids.';
    console.log(future);
}
tellFortune('bball player', 'spain', 'Shaq', 3);
tellFortune('stunt double', 'Japan', 'Ryan Gosling', 1);
tellFortune('Elvis impersonator', 'Russia', 'The Oatmeal', 0);


/*exercise 6 */

function calculateAge(age) {
    var dogYears = 7*age;
    console.log("Your doggie is " + dogYears + " years old acc to human years!");
}

calculateAge(1);
calculateAge(2);
calculateAge(12);
