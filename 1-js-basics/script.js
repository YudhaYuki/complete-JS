// CHALLANGE II

/*

1. Create an array with some years where persons were born

2. Create an empty array (just[])

3. Use a loop to fill the array with the ages of the persons

4. Use another loop to log into the console whether each person is of full age (18 or older), as well as their age

5. Finally, create a function called printFullAge which receives the array of years as argument, executes the step 2, 3 and 4, and returns an array of true/false boolean values: true if the person is of full age (>= 18 years) and false if not (< 18 years)

6. Call the function with two different arrays and store the result in two variables: full_1 and full_2

Example input: [1965, 2008, 1992]
Example output: [true, false, true]


HINT:
You can use a loop not only to read from an array, like y[i], but also to set values in an array, like y[i] = ... You can also use the specific array methods.


*/


// Step 1
var years = [2001, 1985, 1994, 2004, 1973];

// Step 5
function printFullAge(years) {

    // Step 2
    var ages = [];

    // step 5
    var fullAges = [];

    // Step 3
    for (var i = 0; i < years.length; i++) {
        ages[i] = 2016 - years[i];
    }

    // Step 4
    for (i = 0; i < ages.length; i++) {
        if (ages[i] >= 18) {
            console.log('Person ' + (i + 1) + ' is a full age, because he/she is ' + ages[i] + ' years old.');

            // Step 5
            fullAges.push(true);

        } else {
            console.log('Person ' + (i + 1) + ' is NOT a full age, because he/she is ' + ages[i] + ' years old.');

            // Step 5
            fullAges.push(false);    

        }
    }

    return fullAges;

}


// Step 6
var full_1 = printFullAge(years);

var full_2 = printFullAge([2012, 1915, 1999]);