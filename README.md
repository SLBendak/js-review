# Javascript review
This is a js review

## Examples of data types in object

```Javascript

const favoriteStuff = {
    color = 'Blue',
    number = 82,
    food = ['pizza', 'burger', 'taco'],
    heat = false,
    games = {
        gameOne: 'Valorant',
        gameTwo: 'Modern Warfare',
        gameThree: 'The Forest'
    }
}
```

## Examples of functions

```
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
```

## DOM Manipulation

```
//DOM Manipulation
const container = document.querySelector('.container');
console.log(container);

const headerTwo = document.createElement('h2');
headerTwo.textContent = "My First JS Review",
console.log(headerTwo);

container.appendChild(headerTwo);

headerTwo.classList.add('subtitle', 'header-two');
headerTwo.setAttribute('class', 'header-two');
console.log(header-two);

headerTwo.classList.remove(header-two);
console.log(headerTwo);
```
