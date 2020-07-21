// # JS Problem Solving
// Practice pair programming for each problem. Switch roles every 10 mins.
// Be sure to `console.log` to make sure that you got a working solution.
// Ask yourself the following questions with each problem:
// - [ ] Do I understand what the prompt is asking?
// - [ ] Am I able to break the problem down?
// - [ ] What is my strategy for solving the problem?
// - [ ] Do I understand what my code is doing?
// - [ ] Am I able to foresee any edge cases?
// - [ ] Am I able to track the order of the code that is being executed?
// - [ ] Am I able to track the values of the variables?
// - [ ] Am I able to walk through my code line by line with an example?
// - [ ] Do I have a working solution?
// ### isInside
// ```js
////////////////////////////////////////////////////////////////////////
// // Write a function `isInside(array, ele)` that returns true if `ele` is an element
// // inside of the `array`, false otherwise.
// //
// // HINT: use indexOf
// //
// // isInside(['taylor', 'rome', 'adam'], 'rome'); // => true
// // isInside(['pete', 'adam', 'taylor'], 'fred'); // => false
// ```

// function isInside(arr, e) {
//     return arr.indexOf(e);
   
//    }

////////////////////////////////////////////////////////////////////////
// ### reverseStr
// ```js
// // Write a function `reverseStr(str)` that takes in a string as a parameter and
// // returns the string but with the characters in reverse.
// //
// // Examples:
// //
// // reverseStr('bootcamp'); //=> 'pmactoob'
// // reverseStr('General Assembly'); //=> 'ylbmessA lareneG'
// ```

// function reverseStr(str) {
//     let splitStr = str.split("");
//     let revsArr = splitStr.reverse();
//     let joinArr = revsArr.join("");
//     return joinArr;
//   }
////////////////////////////////////////////////////////////////////////

// ### luckySevens
// ```js
// // Write a function `luckySevens(max)` that returns an array of all numbers up
// // to max (inclusive) that are divisible by 7.
// //
// // Examples:
// //
// // luckySevens(25); // => [ 7, 14, 21 ]
// // luckySevens(42); // => [ 7, 14, 21, 28, 35, 42 ]
// ```

// function luckySeven(max) {
// 	let result = [];
// 	for (let i = 0; i < max; i++) {
//   	if (i % 7 === 0){
//     	result.push(i);
//     }
//   }
//   return result;
// }
////////////////////////////////////////////////////////////////////////
// ### copyMachine
// ```js
// // Write a function `copyMachine(element, num)` that takes in an element and a number
// // it should return an array of length `num` that is filled with `element`.
// //
// // Examples:
// //
// // copyMachine('candy', 0); // => []
// // copyMachine('candy', 2); // => [ 'candy', 'candy' ]
// // copyMachine('bread', 4); // => [ 'bread', 'bread', 'bread', 'bread' ]
// // copyMachine(11, 6); // => [ 11, 11, 11, 11, 11, 11 ]
// ```

// function copyMachine(ele, num) {
//     let results = [];
//     for (let i = 0; i <= num; i++) {
//       results.push(i);
//     }
//     return results;
//   }
///////////////////////////////////////////////////////////////////////
// ### everyOtherWord
// ```js
// // Write a function `everyOtherWord(sentence)` that takes in a sentence and returns
// // an array containing every other word in that sentence.
// //
// // Examples:
// //
// // everyOtherWord('hello how are you doing on this lovely day?'); // => [ 'hello', 'are', 'doing', 'this', 'day?' ]
// // everyOtherWord('the weather is wonderful'); // => [ 'the', 'is' ]
// ```

// function everyOtherWord(sentence) {
//     let result = [];
//     // let skip = true;
//     let string = sentence.split(" ");

//     for (i = 0; i < string.length; i+=2) {
//         result.push(string[i]);  
//     }
//          return result;
// }


// console.log(everyOtherWord("Hopefully this function is working"));

////////////////////////////////////////////////////////////////////////
// ### wordYeller
// ```js
// // Write a function `wordYeller(sentence)` that takes in a sentence string as
// // input. It should return the sentence where every word has an exclamation
// // point behind it, except words that already have punctuation. Punctuation
// // marks are ". , ! ? ; :"
// //
// // Example 1
// // let sent = "Stop it now! Please, wont you stop?";
// // let yelledWords = wordYeller(sent);
// // yelledWords === "Stop! it! now! Please, wont! you! stop?"; // => true
// //
// // Example 2
// // let words = "Go to the store and grab the following: milk, bread, run, and cake";
// // wordYeller(words) === "Go! to! the! store! and! grab! the! following: milk, bread, run, and! cake!"; // => true
// ```

// function wordYeller(sentence) {
//     let sentenceSplit = sentence.split(" ");
//     let splitArray = sentenceSplit[i];
//     let lastChar = splitArray.indexOf(-1);
//     let result = [];
//     for (let i = 0; i < splitArray[i].length; i++) {
        
//         if (lastChar = ".", ",", "!", "?", ";" ,":"){
//             result.push(splitArray);
//         } else {
//             result.push(splitArray + "!");
//         }
        
//     }
//     return result;
// }
 
// console.log(wordYeller("What are you doing?"));

////////////////////////////////////////////////////////////////////////
// ### arraySubstring
// ```js
// // Write a function `arraySubstring(words, str)` that takes in an array of
// // strings and a string as arguments and returns an array where each element is
// // replaced with true if the string is a substring of the element and false if
// // it is not.
// //
// // Examples:
// //
// // arraySubstring(["hello", "history", "helix", "hellos"],"hel")
// // => [true, false, true, true]
// // arraySubstring(["prefix", "problems", "pragmatic", "prefer"], "pre")
// // => [true, false, false, true]
// ```
// function arraySubstring(words, str) {
//     let result = [];
//     for (let i=0; i < words.length; i++){
      
        
//         result.push(words[i].indexOf(str) !== -1); 

  
        
        
//         console.log(words[i].indexOf(str) !== -1);
    
//     }
//     return result;
// }

// console.log(arraySubstring(["history", "helix", "hellos"],"hel"));
//////////////////////////////////////////////////////////////////////
// #### evenCaps
// ```js
// // Write a function evenCaps(sentence) that takes in a sentence as an
// // argument and returns the same string with each even index being
// // capitalized. Index 0 counts as even.
// //
// // Examples:
// //
// // evenCaps("Tom got a small piece of pie")
// // => "ToM GoT A SmAlL PiEcE Of pIe"
// // evenCaps("the book is in front of the table")
// // => "ThE BoOk iS In fRoNt oF ThE TaBlE"
// ``` toUpperCase

// function evenCaps(sentence) {
//     let letters = sentence.split("");
//     let upperCase = true;
//     let result = [];
    
    
//     for (let i = 0; i < letters.length; i++){
//         if (upperCase == true){
//             result.push(letters[i].toUpperCase());
//             upperCase = false;
//         } else {
//             result.push(letters[i]);
//             upperCase = true;

//         }
        
//     }
//     var finalResult = result.join("");
//     return finalResult;

// }
// console.log(evenCaps("Tom got a small piece of pie"));
/////////////////////////////////////////////////////////////////////////////
//////FIRST ATTEMPT////////////
// function evenCaps(sentence) {
//     // let letters = sentence.split("");
//     // let result = [];
//     let newSentence = sentence;
//     for (let i = 0; i < sentence.length; i+=2){
//         newSentence.charAt(i).toUpperCase();
//         console.log(newSentence.charAt(i).toUpperCase());
//     }
//     console.log(newSentence);
//     return newSentence;
// }
// console.log(evenCaps("Tom got a small piece of pie"));
