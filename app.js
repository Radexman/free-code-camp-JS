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

// let testScore = 50;
// let collegeStudent = false;
// let grade;

// if (testScore >= 90) {
//     grade = 'A';
// } else if (testScore >= 80) {
//     grade = 'B';
// } else if (testScore >= 70) {
//     grade = 'C';
// } else if (testScore >= 60) {
//     grade = 'd';
// } else {
//     if (collegeStudent) {
//         grade = 'U';
//     } else {
//         grade = 'F';
//     }
// }

// console.log(grade);

// if (playerOne === computer) {
//     // tie game
// } else if (playerOne === 'rock') {
//     if (computer === 'paper') {
//         // computer wins 
//     } else {
//         // playerOne wins
//     }
// } else if (playerOne === 'paper') {
//     if (computer === 'scissors') {
//         // computer wins 
//     } else {
//         // playerOne wins
//     }
// } else {
//     if (computer === 'rock') {
//         // computer wins 
//     } else {
//         // playerOne wins
//     }
// }

// let playerOne = 'rock';
// let computer = 'scissors';

// switch (playerOne) {
//     case computer:
//         console.log('Tie game');
//         break;

//     case 'rock':
//         if (computer === 'paper') {
//             console.log('You lost');
//         } else {
//             console.log('playerOne wins')
//         }
//         break;
    
//     case 'paper':
//         if (computer === 'scissors') {
//             console.log('You lost');
//         } else {
//             console.log('playerOne wins')
//         }
//         break;

//     default:
//         if (computer === 'rock') {
//             console.log('You lost');
//         } else {
//             console.log('playerOne wins')
//         }
//         break;
// }

// Conditionals: Ternary Operator

// const number = 50;
// let result;

// // if (number >= 50) {
// //     result = 'Not to fifty!';
// // } else {
// //     result = 'It could be worse';
// // }

// // result = number >= 50 ? 'Not to fifty!' : 'It could be worse';

// // if (number === 0) {
// //     result = 'You have nothing';
// // } else if (number < 10) {
// //     result = 'You have very little';
// // } else {
// //     result = 'You have a lot';
// // }

// // console.log(result);

// // ======= Arrow functions ======== //

// function sum(a, b) {
//     return a + b;
// }

// let sum2 = (a, b) => a + b;

// function isPositive(number) {
//     return number >= 0;
// }

// let isPositive2 = number => number >= 0;

// function randomNumber() {
//     return Math.floor(Math.random() * 10 + 1);
// }

// let randomNumber2 = () => Math.floor(Math.random() * 10 + 1);


// document.addEventListener('click', function () {
//     console.log('Click');
// })

// document.addEventListener('click', () => {
//     console.log('Click');
// })

// User Input

// let name = prompt('Please enter your name');
// console.log(name ??);

// ===== Loops ===== //

// let myNumber = 50;
// while (myNumber < 50) {
//     myNumber += 2;
//     console.log(myNumber);
// }

// do {
//     console.log(myNumber);
// } while (myNumber < 50);

// let anyName = 'Radosław';

// let getRandomChar = name => name.charAt(Math.floor(Math.random() * name.length));
// console.log(getRandomChar(anyName));

// let height = 10;
// let width = 5;
// let depth = 3;

// let getArea = (height, width, depth) => {
//     let area = width * height;
//     let volume = width * height * depth;
//     let areas = [area, volume];
//     return areas;
// }

// console.log(getArea(height, width, depth)[0]);
// console.log(getArea(height, width, depth)[1]);

// function Car(year, speed, brand) {
//     this.year = year;
//     this.speed = speed;
//     this.brand = brand;
// }

// let bmw = new Car(1999, '600KM', 'BMW');

// console.log(bmw.brand);

// let cars = [
//     'Ferrari',
//     'Aston Martin',
//     'Lamborgini',
//     'Porshe'
// ]

// let myFavCar = cars[0];

// let legal = false;
// let checkLegal = legal ? console.log('This stuff is legal') : console.log('This stuff is illegal');

// let fruits = [
//     'banana',
//     'pineapple',
//     'strawberry',
//     'orange'
// ]

// let i = 0;
// for (i; i < fruits.length; i++) {
//     console.log(fruits[i]);
// }

// fruits.forEach((fruit) => {
//     console.log(fruit);
// })

// let headings = document.querySelectorAll('.hhh');
// let creator = document.getElementsByClassName('creator');

// let createEl = () => {
//     let newHeading = document.createElement('h2');
//     let newTextNode = document.createTextNode('Heading');
//     newHeading.appendChild(newTextNode);
//     document.appendChild(newHeading);
// }

// createEl();

// creator.addEventListener('click' () => {
// })

// headings.forEach((heading) => {
//     heading.addEventListener('click', () => {
//         heading.classList.toggle('active');
//     })
// })

// let newEl = document.createElement('h2');
// let newTextNode = document.newTextNode('New Heading');
// newEl.appendChild(newTextNode);

// document.appendChild(newEl);

// Loops

// let myNumber = 0;

// while (myNumber < 50) {
//     myNumber += 2;
//     console.log(myNumber);
// }

// do {
//     myNumber += 2;
//     console.log(myNumber);
// } while (myNumber < 50);

// let name = 'Radek';
// for (let i = 0; i < name.length; i++) {
//     console.log(name.charAt(i));
// }

// let name = 'Radek';
// let counter = 0;
// let myLetter;
// while (counter <= 3) {
//     myLetter = name[counter];
//     console.log(myLetter);
//     if (counter === 1) {
//         counter += 2;
//         continue;
//     }
//     if (myLetter === 'd') break;
//     counter++;
// }

// ===== Functions ===== //

// const getUserNameFromEmail = (email) => {
//     return email.slice(0, email.indexOf('@'));
// }

// console.log(getUserNameFromEmail('Borderlandsmaniak@gmail.com'));

// const toProperName = (name) => {
//     return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
// }

// console.log(toProperName('radosław'));

// ===== Scope ===== //

// var x = 1;
// let y = 2;
// const z = 3;

// console.log(`global: ${x}`);
// console.log(`global: ${y}`);
// console.log(`global: ${z}`);

// let myFunction = () => {
//     var x = 10;
//     let z = 5; 
//     {
//         var x = 11; // function scoped
//         const z = 6; // block scoped
//         console.log(`block: ${x}`);
//         console.log(`block: ${y}`);
//         console.log(`block: ${z}`); 
//     }
//     console.log(`function: ${x}`);
//     console.log(`function: ${y}`);
//     console.log(`function: ${z}`);
// }

// myFunction();

// ===== Arrays ===== //

// const myArrayA = ['A', 'B', 'C'];
// const myArrayB = ['D', 'E', 'F'];

// const newArray = [...myArrayA, ...myArrayB];

// console.log(newArray);

// const equipShelfA = ['baseball', 'football', 'volleyball'];
// const equipShelfB = ['basketball', 'golf balls', 'tennis balls'];

// const clothesShelfA = ['tank tops', 't-shirts', 'jerseys'];
// const clothesShelfB = ['sweat tops', 'sweat pants', 'hoodies'];

// console.log(equipShelfA[1]);
// console.log(clothesShelfB[0]);

// const equipDept = [equipShelfA, equipShelfB];
// const clothesDept = [clothesShelfA, clothesShelfB];

// console.log(equipDept[0][1]);
// console.log(clothesDept[1][0]);

// ===== Objects ===== //

const band = {
    vocals: 'Robert Plant',
    guitar: 'Jimmy Page',
    bass: 'John Paul Jones',
    drums: 'John Bonham'
}