# Javascript review
This is a js review



## Examples of data types in object

## Javascript

### OBJECT
```
const favoriteStuff = {
    color: 'Blue',
    number: 82,
    food: ['pizza', 'burger', 'taco'],
    heat: false,
    games: {
        gameOne: 'Valorant',
        gameTwo: 'Modern Warfare',
        gameThree: 'The Forest'
    }
};
```
### ARRAY
```
var array = ["one", "two", "three"];
```

### STRING
```
var string = "This is a string";
```
### NUMBER
```
var number = 5;
```

### BOOLEAN
```
var happy = true;
```

## Examples of functions


### standard function
```
function addNumbers(num1, num2){
    return num1 + num2;
}
```
### function expression
```
const multiplyNumbers = function(num1, num2){
    neturn num1 * num2;
}
```
### arrow function
```
consta subtractNumbers = (num1, num2) => {
    return num1- num2;
}
```
### Constructor Functions
```
function Crawler(x, y, width, height, color) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.color = color;
  this.alive = true;
  this.render = function() {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}
```
## If/Else Statement
```
    condition
if (x = true){
    action taken
    x = false;
} else(x = false){
    x = true;
}
```


## DOM Manipulation

```
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

### More DOM Manipulation

```
// iterate through firends array
for (let i = 0; i < friends.length; i++){
    let eachFriend = friends[i];
    console.log(eachFriend);

// Create an element
    const listItem = document.createElement('li');
// add text to that item
    listItem.textContext = eachFriend;
// append item to list
    list.appendChild(listItem);

}

console.log(list);
// listen for click
headerThree.addEventListener('click', function(){
    CredentialsContainer.appendChild(list);
});
```


