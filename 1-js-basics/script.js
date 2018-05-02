// Arrays

var names = ['John', 'Jane', 'Marry'];
var years = new Array(1990, 1969, 1948);

console.log(names);

console.log(names[1]);

names[1] = 'Ben';
console.log(names);




var john = ['John', 'Smith', 1990, 'designer', false];

// Push function
john.push('blue');

// Unshift function
john.unshift('Mr.');

// Pop function
john.pop();

// Shift function
john.shift();

console.log(john);



// indexOf 
if (john.indexOf('teacher') === -1) {
    console.log('John is NOT a teacher');
}
