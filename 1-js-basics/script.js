var agePersonOne = 25;
var agePersonTwo = 23;
var agePersonThree = 27;

var heightPersonOne = 170;
var heightPersonTwo = 175;
var heightPersonThree = 172;


var scorePersonOne = (agePersonOne * 5) + heightPersonOne;
var scorePersonTwo = (agePersonTwo * 5) + heightPersonTwo;
var scorePersonThree = (agePersonThree * 5) + heightPersonThree;

if ( scorePersonOne > scorePersonTwo && scorePersonOne > scorePersonThree ) {
    console.log('Person One is the winner with score ' + scorePersonOne);
} else if ( scorePersonTwo > scorePersonOne && scorePersonTwo > scorePersonThree ) {
    console.log('Person Two is the winner with score ' + scorePersonTwo);
} else if ( scorePersonThree > scorePersonOne && scorePersonThree > scorePersonTwo ) {
    console.log('Person Three is the winner with score ' + scorePersonThree);
} else {
    console.log('It\'s a draw');
}