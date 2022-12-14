// =========================================== String Methods =============================================== //

// const myVariable = 'Emilia';

// The length property
// console.log(myVariable.length);

// Returns character at provided position
// console.log(myVariable.charAt(0));

// Returns the first position of passed value
// console.log(myVariable.indexOf('Em'));

// Returns position of the last occurence
// console.log(myVariable.lastIndexOf('ia'));

// Takes starting and ending indexes and provides characters in between
// console.log(myVariable.slice(2, 4));

// Turns string to upper characters
// console.log(myVariable.toUpperCase());

// Turns string to lower characters
// console.log(myVariable.toLowerCase());

// If the chars are not inside the string it returns false
// console.log(myVariable.includes('Emi'));

// Splits string in provided index
// console.log(myVariable.split('i'));

// =========================================== Number Methods =============================================== //

// An intiger is a whole nummber
// const myNumber = 50;

// A number with a decimal point is a float which
// references the "floating point"
// const myFloat= 50.03;
// const myString = '50.333';

// Turns a string into number
// console.log(Number(myString));
// console.log(myString);

// Determines wether the passed value is an integer
// console.log(Number.isInteger(myNumber));

// Parses an argument and returns floating point number
// If a number cannot be parsed from the argument, it returns NaN
// console.log(Number.parseFloat(myString));

// Formats a number according to how many decimal points
// you provide as the parameter
// console.log(Number.parseFloat(myString).toFixed(0));

// =========================================== Math Object =============================================== //

// Displays PI
// console.log(Math.PI);

// Removes any decimals
// console.log(Math.trunc(Math.PI));

// Rounds number to the nearest int
// console.log(Math.round(3.4));

// Rounds int up
// console.log(Math.ceil(3.132));

// Rounds int down
// console.log(Math.floor(3.123));

// takes int and makes superscript
// console.log(Math.pow(4, 2));

// Returns smalles number
// console.log(Math.min(10, 6, 2));

// Returns biggest number
// console.log(Math.max(10, 9, 2));

// Returns rndom number from 0 - 1
// console.log(Math.random());

// Returns random number from 1 - 10
// console.log(Math.floor(Math.random() * 10) + 1);

// Code Challenge

// let anyName = 'Radosław';

// function getRandomChar(name) {
//     let randomChar = name.charAt(Math.floor(Math.random() * name.length));
//     return randomChar;
// }

// console.log(getRandomChar(anyName));


// =========================================== If Statements =============================================== //

// let customerIsBanned = false;
// let soup = 'chicken noodle soup';
// let crackers = true;
// let reply;

// if (customerIsBanned) {
//     reply = 'No soup for you!';
// } else if (soup && crackers) {
//     reply = `Here's your order of ${soup} & crackers`;
// } else if (soup) {
//     reply = `Here's your order of ${soup}`;
// } else {
//     reply = `Sorry, we're out of soup.`;
// }

// console.log(reply);

let testScore = 50;
let collegeStudent = false;
let grade;

if (testScore >= 90) {
    grade = 'A';
} else if (testScore >= 80) {
    grade = 'B';
} else if (testScore >= 70) {
    grade = 'C';
} else if (testScore >= 60) {
    grade = 'd';
} else {
    if (collegeStudent) {
        grade = 'U';
    } else {
        grade = 'F';
    }
}

console.log(grade);