// FUNCTION

// Example I

function calculateAge(yearOfBirth) {
    var age = 2016 - yearOfBirth;
    return age;
}

var ageOfJohn = calculateAge(1990);
var ageOfMike = calculateAge(1969);
var ageOfMarry = calculateAge(1948);

// console.log(ageOfMarry);




// Example II

function yearsToRetirement(name, year) {
    var age = calculateAge(year);
    var retirement = 65 - age ;

    if (retirement >= 0) {
        console.log(`${name} will be retired in ${retirement} years.`);        
    } else {
        console.log(`${name} has already retired`);        
    }
}

yearsToRetirement('John', 1990);
yearsToRetirement('Mike', 1969);
yearsToRetirement('Marry', 1948);