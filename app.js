let name = "Shane Bendak";
let age = 27;
let isCool = true;
const friends = ["kevin", "Molik", "Jason", "Asia"];

const tesla = {
    industry: 'electric cars',
    ceo: 'Elon Musk',
    yearFounded: 2003,
    foundingMembers: ['Elon Musk', 'JB Straubel', 'Martin Eberard'],
    stockTicker: 'TSLA',
    vehicles: {
        vehicleOne: 'Model S',
        vehicleTwo: 'Model X',
        vehicleThree: 'Model 3'
    },
    print: function() {
        console.log('The CEO of Tesla is ' + this.ceo);
    }
}

tesla.stockPrice = 1643.00;

console.log(name);
console.log(age);
console.log(isCool);
console.log(friends);
console.log(tesla);

tesla.print();

//

const favoriteStuff = {
    color = 'Blue',
    number = 82,
    foods = ['pizza', 'burger', 'taco'],
    heat = false,
    games = {
        gameOne: 'Valorant',
        gameTwo: 'Modern Warfare',
        gameThree: 'The Forest'
    }
}

function printFoods(array) {
    array,forEach(food => {
        console.log(food);
    })
}

printFoods(foods);

// standard function
function addNumbers(num1, num2){
    return num1 + num2;
}

// function expression
const multiplyNumbers = function(num1, num2){
    neturn num1 * num2;
}

// arrow function

consta subtractNumbers = (num1, num2) => {
    return num1- num2;
}