let name = "Shane Bendak";
let age = 27;
let isCool = true;
const friends = ["kevin", "Molik", "Jason", "Asia"];

// const tesla = {
//     industry: 'electric cars',
//     ceo: 'Elon Musk',
//     yearFounded: 2003,
//     foundingMembers: ['Elon Musk', 'JB Straubel', 'Martin Eberard'],
//     stockTicker: 'TSLA',
//     vehicles: {
//         vehicleOne: 'Model S',
//         vehicleTwo: 'Model X',
//         vehicleThree: 'Model 3'
//     },
//     // print: function() {
//     //     console.log('The CEO of Tesla is ' + this.ceo);
//     }
// // }

// tesla.stockPrice = 1643.00;

// console.log(name);
// console.log(age);
// console.log(isCool);
// console.log(friends);
// console.log(tesla);

// // tesla.print();

// //

// const favoriteStuff = {
//     color: 'Blue',
//     number: 82,
//     foods: ['pizza', 'burger', 'taco'],
//     heat: false,
//     games: {
//         gameOne: 'Valorant',
//         gameTwo: 'Modern Warfare',
//         gameThree: 'The Forest'
//     },
// }

// function printFoods(array) {
//     array,forEach(food => {
//         console.log(food);
//     })
// }

// printFoods(foods);

// // standard function
// function addNumbers(num1, num2){
//     return num1 + num2;
// }

// // function expression
// const multiplyNumbers = function(num1, num2){
//     return num1 * num2;
// }

// // arrow function

// const subtractNumbers = (num1, num2) => {
//     return num1- num2;
// }

// The DOM

const container = document.querySelector('.container');
console.log(container);

const headerTwo = document.createElement('h2');
headerTwo.textContent = "My First JS Review",
console.log(headerTwo);

container.appendChild(headerTwo);

headerTwo.classList.add('subtitle', 'header-two');
headerTwo.setAttribute('class', 'header-two');
console.log(headerTwo);

headerTwo.classList.remove(header-two);
console.log(headerTwo);


headerTwo.addEventListener('click', function(){
    headerTwo.textContent = 'Shane';
});

// make another element
const headerThree = document.createElement('h2');
headerThree.textContent = 'Friends';

container.appendChild(headerThree);

console.log(headerThree);
const list = document.createElement('ul');

// iterate through firends array
for (let i = 0; i < friends.length; i++){
    let eachFriend = friends[i];
    console.log(eachFriend);

    const listItem = document.createElement('li');
    listItem.textContext = eachFriend;

    list.appendChild(listItem);

}

console.log(list);

headerThree.addEventListener('click', function(){
    CredentialsContainer.appendChild(list);
});


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