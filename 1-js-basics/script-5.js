// If/Else statements

var name = 'John', age = 26, isMarried = 'yes';

if (isMarried === 'yes') {
    console.log(name + ' is married !');
} else {
    console.log(name + ' will hopefully marry soon !');
}

isMarried = false;

if(isMarried) {
    console.log('YES');
} else {
    console.log('No!');
}



// Type coersion 

if (23 == "23") {
    console.log('Print something');
}

if (25 === "23") {
    console.log('It wont print anything');
}