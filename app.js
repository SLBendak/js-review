// let name = "Shane Bendak";
// let age = 27;
// let isCool = true;
// const friends = ["kevin", "Molik", "Jason", "Asia"];

// // const tesla = {
// //     industry: 'electric cars',
// //     ceo: 'Elon Musk',
// //     yearFounded: 2003,
// //     foundingMembers: ['Elon Musk', 'JB Straubel', 'Martin Eberard'],
// //     stockTicker: 'TSLA',
// //     vehicles: {
// //         vehicleOne: 'Model S',
// //         vehicleTwo: 'Model X',
// //         vehicleThree: 'Model 3'
// //     },
// //     // print: function() {
// //     //     console.log('The CEO of Tesla is ' + this.ceo);
// //     }
// // // }

// // tesla.stockPrice = 1643.00;

// // console.log(name);
// // console.log(age);
// // console.log(isCool);
// // console.log(friends);
// // console.log(tesla);

// // // tesla.print();

// // //

// // const favoriteStuff = {
// //     color: 'Blue',
// //     number: 82,
// //     foods: ['pizza', 'burger', 'taco'],
// //     heat: false,
// //     games: {
// //         gameOne: 'Valorant',
// //         gameTwo: 'Modern Warfare',
// //         gameThree: 'The Forest'
// //     },
// // }

// // function printFoods(array) {
// //     array,forEach(food => {
// //         console.log(food);
// //     })
// // }

// // printFoods(foods);

// // // standard function
// // function addNumbers(num1, num2){
// //     return num1 + num2;
// // }

// // // function expression
// // const multiplyNumbers = function(num1, num2){
// //     return num1 * num2;
// // }

// // // arrow function

// // const subtractNumbers = (num1, num2) => {
// //     return num1- num2;
// // }

// // The DOM

// const container = document.querySelector('.container');
// console.log(container);

// const headerTwo = document.createElement('h2');
// headerTwo.textContent = "My First JS Review",
// console.log(headerTwo);

// container.appendChild(headerTwo);

// headerTwo.classList.add('subtitle', 'header-two');
// headerTwo.setAttribute('class', 'header-two');
// console.log(headerTwo);

// headerTwo.classList.remove(header-two);
// console.log(headerTwo);


// headerTwo.addEventListener('click', function(){
//     headerTwo.textContent = 'Shane';
// });

// // make another element
// const headerThree = document.createElement('h2');
// headerThree.textContent = 'Friends';

// container.appendChild(headerThree);

// console.log(headerThree);
// const list = document.createElement('ul');

// // iterate through firends array
// for (let i = 0; i < friends.length; i++){
//     let eachFriend = friends[i];
//     console.log(eachFriend);

//     const listItem = document.createElement('li');
//     listItem.textContext = eachFriend;

//     list.appendChild(listItem);

// }

// console.log(list);

// headerThree.addEventListener('click', function(){
//     CredentialsContainer.appendChild(list);
// });


// reference each friend
// create a li
// add textContent to li
//append that to a ul (unordered list)

// unordered list
// friends
// -friend one
// -friend two 
// -friend three 

// ordered list 
// friends
// 1. friend one
// 2. friend two 
// 3. friend three


// Problem Solving

// what do i start with
// what do i hope to end up with

// understand the problem
//where the issue starts

// break it down into more manageable problems

// be sure to console.log();

// - [ ] Do I understand what the prompt is asking?
// - [ ] Am I able to break the problem down?
// - [ ] What is my strategy for solving the problem?
// - [ ] Do I understand what my code is doing?
// - [ ] Am I able to foresee any edge cases?
// - [ ] Am I able to track the order of the code that is being executed?
// - [ ] Am I able to track the values of the variables?
// - [ ] Am I able to walk through my code line by line with an example?
// - [ ] Do I have a working solution?

//fizzBuzz

//write a function that does the following
    // takes in an array
    // check each number in the array
    // if the number is divisible by 5 and 3 === fizzBuzz
    // if the number is divisible by 3 === 'Fizz'
    // if the number is divisible by 5 === 'Buzz'
// return an array

//  for example:
// [3, 5, 15, 20, 9, 7]
// ['Fizz', 'Buzz', 'FizzBuzz', 'Buzz', 'Fizz', 7]

// I need to set up an empty array
// iterate through the array thats going to be passed in
// check the remainder of each element
// I need to push the result of each element inside of the result array
// return that result array

// function fizzBuzz(array) {
//     let result = [];

//     for (let i = 0; i < array.length; i++){
//         let num = array[i];
//         console.log(num);

//         if (num % 3 === 0 && num % 5 === 0) {
//             // do something
//             result.push('FizzBuzz');
//         } else if (num % 3 === 0){
//             // do something else
//             result.push('Fizz');
//         } else if (num % 5 === 0){
//             // do something else
//             result.push('Buzz');
//         } else {
//             // otherwise do this
//             result.push(num);
//         }
//     }

//     return result;
// }


// console.log(fizzBuzz([3, 5, 15, 20, 9, 7]));

// // practice



  
// js
// Write a function `isInside(array, ele)` that returns true if `ele` is an element
// inside of the `array`, false otherwise.
//
// HINT: use indexOf
//
// isInside(['taylor', 'rome', 'adam'], 'rome'); // => true
// isInside(['pete', 'adam', 'taylor'], 'fred'); // => false


 

