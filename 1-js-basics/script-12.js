// Objects and methods

/*
var john = {
    firstName : 'John',
    lastName : 'Smith',
    yearofBirth : 1990,
    job: 'teacher',
    isMarried: false,
    family: ['Jane', 'Mark', 'Bob'],
    calculateAge : function(yearOfBirth) {
        return 2016 - yearOfBirth;
    }
}

console.log(john.family[2]);
console.log(john.calculateAge(1990));
*/









// Using THIS Method

// Version 1
/*
var john = {
    firstName : 'John',
    lastName : 'Smith',
    yearOfBirth : 1990,
    job: 'teacher',
    isMarried: false,
    family: ['Jane', 'Mark', 'Bob'],
    calculateAge : function() {
        return 2016 - this.yearOfBirth;
    }
}

console.log(john.calculateAge());

var age = john.calculateAge();
john.age = age;

console.log(john);

*/



// Version 2

var john = {
    firstName : 'John',
    lastName : 'Smith',
    yearOfBirth : 1990,
    job: 'teacher',
    isMarried: false,
    family: ['Jane', 'Mark', 'Bob'],
    calculateAge : function() {
        this.age = 2016 - this.yearOfBirth;
    }
};


john.calculateAge();
console.log(john);




var mike = {
    firstName : 'Mike',
    yearOfBirth : 1980,
    calculateAge : function() {
        this.age = 2016 - this.yearOfBirth;
    }
};


mike.calculateAge();
console.log(mike);

