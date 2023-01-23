




// // ASSIGNMENT  // //

// 1. ANS=>

let myName = "omkar";
  console.log(typeof(myName))  // string


let isStudent = true;

console.log(typeof(nameIsstring))   // boolean

let lstName;

console.log(typeof(lstName))     // undefined


let address = null;
console.log(address + " is a " + typeof address);     // null




// 2. ANS=>

let firstName = "Omkar";
let lastName = "Chauhan";
let maritalStatus = "single";
let country = "India";
let age = 25;

console.log(`Hi, My name is ${firstName} ${lastName}. I am currently ${maritalStatus} and I am from ${country}. I am ${age} years old.`);
 
// Hi, My name is Omkar Chauhan. I am currently single and I am from India. I am 25 years old.


// 3. ANS=>

let sentence = "Hello World!";

// Converting all characters to Uppercase
sentence = sentence.toUpperCase();
console.log("uppercase sentence : " + sentence);  // uppercase sentence : HELLO WORLD!



// 4. ANS=>

let valString = "JavaScript is a programming language";

// Checking  if the string contains the word "Script"
let isContains = valString.includes("Script");
console.log("Is the sentence contains the word Script : " + isContains);  // Is the sentence contains the word Script : true




// 5. ANS=>

let mainWords = "JavaScript is a programming language";
let words = mainWords.split(",");
console.log(words);                            // ['JavaScript is a programming language']


// 6. ANS=> 

let names = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';

let spliting = names.split(",")

console.log(spliting)                    // ['Facebook', ' Google', ' Microsoft', ' Apple', ' IBM', ' Oracle', ' Amazon']


// 7. ANS=> 
