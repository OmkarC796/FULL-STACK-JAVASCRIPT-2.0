// JavaScript Questions:-

// 01. Create a variable.js file and declare variables and assign string, boolean, undefined and null data types, Display all the value with their data type.

// 02. Declare variables to store your first name, last name, marital status, country and age and display them using interploation method.

// 03. Declare a varibale and assign string value to it and change all the string characters to capital letters using toUpperCase() method.

// 04. Declare a varibale and assign string value to it and check if the string contains a word Script using includes() method.

// 05. Declare a varibale and assign string value to it and then split it into an array using split() method

// 06. 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.

// 07. Declare an array containing the multiple values and use lastIndexOf to determine the position of the first and last occurrence of a word "pw skills".

// 08. Demonstrate the use of trim() to remove any trailing whitespace at the beginning and the end of a string.

// 09. Boolean value is either true or false.
//     - Write three JavaScript statement example which provide truthy value.
//     - Write three JavaScript statement example which provide falsy value.

// 10. Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
//     - 4 > 3
//     - 4 >= 3
//     - 4 < 3
//     - 4 <= 3
//     - 4 == 4
//     - 4 === 4
//     - 4 != 4
//     - 4 !== 4
//     - 4 != '4'
//     - 4 == '4'
//     - 4 === '4'
//     - Find the length of python and jargon and make a falsy comparison statement.

// 11. Use the Date object to do the following activities
//     - What is the year today?
//     - What is the month today as a number?
//     - What is the date today?
//     - What is the day today as a number?
//     - What is the hours now?
//     - What is the minutes now?
//     - Find out the numbers of seconds elapsed from January 1, 1970 to now.

// 12. Create a human readable time format using the Date time object
//     - YYYY-MM-DD HH:mm
//     - DD-MM-YYYY HH:mm
//     - DD/MM/YYYY HH:mm

// 13. Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.

// 14. Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript? Create a program which checks that the given number is even or odd.

// 15. Write a program which can give grades to students according to theirs scores:
//     - 80-100, A
//     - 70-89, B
//     - 60-69, C
//     - 50-59, D
//     - 0-49, F

// 16. Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
//     - September, October or November, the season is Autumn.
//     - December, January or February, the season is Winter.
//     - March, April or May, the season is Spring
//     - June, July or August, the season is Summer

// 17. Write a program which tells the number of days in a month.

// 18. Write a program which tells the number of days in a month, now consider leap year.

// 19. Create a countries.js file and store the countries name into this file, create a file web_techs.js and store the popular web technology names into this file. Access both file in a third file named main.js

// 20. In the following shopping cart add, remove, edit items
//     => const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
//     - add 'Meat' in the beginning of your shopping cart if it has not been already added
//     - add Sugar at the end of your shopping cart if it has not been already added
//     - remove 'Honey'
//     - modify Tea to 'Green Tea'

// 21. In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.

// 22. The following is an array of 10 students ages:
//     => const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
//     - Sort the array and find the min and max age
//     - Find the median age(one middle item or two middle items divided by two)
//     - Find the average age(all items divided by number of items)
//     - Find the range of the ages(max minus min)
//     - Compare the value of (min - average) and (max - average), use abs() method

// 23. Write a program to check that the number given by the user is a prime number or not.

// 24. Write a program to create two array "even" and "odd" having even and odd number between the 0 to 100 (0 and 100 included).

// 25. Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.
//     - The same groups apply to both men and women.
//     - Underweight: BMI is less than 18.5
//     - Normal weight: BMI is 18.5 to 24.9
//     - Overweight: BMI is 25 to 29.9
//     - Obese: BMI is 30 or more

// 26. Write a program to print the table of any number given by the user. The format of the output should be smiliar to the below example-
// 	If the number given by the user is 2 then the output should look like this-
// 	2 * 1 = 2
// 	2 * 2 = 4
// 	2 * 3 = 6 and so on till 2 * 10 = 20.

// 27. Write a program to print all the prime number between 0 to 100 (0 and 100 included).

// 28. Write a program to print the given patterns using the loops-
// 	a. Print a triangle pattern, if the given input is 3 then the pattern should be similar to the given output
// 	   *
// 	   **
// 	   ***
	
// 	b. Print a square pattern, if the input is 3 then the output should be similar to the given output
// 	   ***
// 	   ***
// 	   ***

// 	c. Print a pyramid pattern, if the input is 3 then the output should be similar to the given output
// 	     *
// 	    ***
//  	   *****

// 29. Write a javascript program which takes the input of filename as string and prints the extension of the file in the console.

// 30. Create a simple calculator program in JavaScript which can perform the addition, substraction, multiplication and division on given numbers.














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

let array = ["pw skills", "programming", "coding", "pw skills", "web development"];
let firstOccurrenceIs = array.indexOf("pw skills");
let lastOccurrenceIs = array.lastIndexOf("pw skills");
console.log("First occurrence of 'pw skills' is at index " + firstOccurrenceIs + " and last occurrence is at index " + lastOccurrenceIs);

// First occurrence of 'pw skills' is at index 0 and last occurrence is at index 3




//  8. ANS=>

let str = "  Hello, World!  ";
console.log(str.trim());             //  "Hello, World!"




// 9. ANS=> 

// (A) Three JavaScript statements that provide truthy values:

    console.log(true)
    console.log(1 == 1)
    console.log([] != [])


//(B) Three JavaScript statements that provide falsy values:

    console.log(false)
    console.log(0 == 1)
    console.log(undefined == null)



    // 10. ANS=>


  //   4 > 3 is true
  //   4 >= 3 is true
  //   4 < 3 is false
  //   4 <= 3 is false
  //   4 == 4 is true
  //   4 === 4 is true
  //   4 != 4 is false
  //   4 !== 4 is false
  //   4 != '4' is false
  //   4 == '4' is true
  //   4 === '4' is false
  //   The length of the string "python" is 6 and the length of the string "jargon" is 6. A falsy comparison statement would be: "6 > 6" which is false.


  // confirm the above results by using console.log() like this:

    console.log(4 > 3);
    console.log(4 >= 3);
    console.log(4 < 3);
    console.log(4 <= 3);
    console.log(4 == 4);
    console.log(4 === 4);
    console.log(4 != 4);
    console.log(4 !== 4);
    console.log(4 != '4');
    console.log(4 == '4');
    console.log(4 === '4');
    console.log(6 > 6)






 // 11. ANS=>

 // To get the current year:
var today = new Date();
var year = today.getFullYear();
console.log(year);


// To get the current month:
var month = today.getMonth();
console.log(month);


// To get the current date:
var date = today.getDate();
console.log(date);


// To get the day of the week:
var day = today.getDay();
console.log(day);


// To get the current hour:
var hours = today.getHours();
console.log(hours);


// To get the current minutes:
var minutes = today.getMinutes();
console.log(minutes);


// To get the number of seconds elapsed from January 1, 1970 to now, you can use the getTime() method:
var seconds = today.getTime() / 1000;
console.log(seconds);




// 12. ANS=>

// 1. YYYY-MM-DD HH:mm

    var today = new Date();
    var year = today.getFullYear();
    var month = today.getMonth() + 1; // getMonth() returns a 0-indexed value, so add 1 to get the correct month
    var date = today.getDate();
    var hour = today.getHours();
    var minute = today.getMinutes();

    // format the month, date, and hour/minute values with leading zeroes if necessary
    if (month < 10) { month = "0" + month; }
    if (date < 10) { date = "0" + date; }
    if (hour < 10) { hour = "0" + hour; }
    if (minute < 10) { minute = "0" + minute; }

    var formattedDate = year + "-" + month + "-" + date + " " + hour + ":" + minute;
    console.log(formattedDate);



// 2. DD-MM-YYYY HH:mm

    var today = new Date();
    var year = today.getFullYear();
    var month = today.getMonth() + 1;
    var date = today.getDate();
    var hour = today.getHours();
    var minute = today.getMinutes();

    if (month < 10) { month = "0" + month; }
    if (date < 10) { date = "0" + date; }
    if (hour < 10) { hour = "0" + hour; }
    if (minute < 10) { minute = "0" + minute; }

    var formattedDate = date + "-" + month + "-" + year + " " + hour + ":" + minute;
    console.log(formattedDate);



// 3. DD/MM/YYYY HH:mm

    var today = new Date();
    var year = today.getFullYear();
    var month = today.getMonth() + 1;
    var date = today.getDate();
    var hour = today.getHours();
    var minute = today.getMinutes();

    if (month < 10) { month = "0" + month; }
    if (date < 10) { date = "0" + date; }
    if (hour < 10) { hour = "0" + hour; }
    if (minute < 10) { minute = "0" + minute; }

    var formattedDate = date + "/" + month + "/" + year + " " + hour + ":" + minute;
    console.log(formattedDate);




   // 13. ANS=>
   
  
   var yourAge = prompt("Enter your age")


  //  var yourAge = 18;

   if (yourAge >= 18){

   console.log("You are old enough to drive")

   }else{

   console.log("You need to wait for " + (18 - age) + " years to turn 18.")

   }



  //  14. ANS=>

   let number = prompt("Enter the number")

   if(number%2==0){
    console.log("Provided number is Even")
   }else{
    console.log("Provided number is Odd")
   }




    // 15. ANS=>

    let yourScore = prompt("Enter your score")

    if(yourScore >= 80 && yourScore <= 100){
      console.log("Grade A")
    }else if(yourScore >= 70 && yourScore <= 79){
      console.log("B")
    }else if(yourScore >= 60 && yourScore <=69){
      console.log("C")
    }else if(yourScore >= 50 && yourScore <= 59){
      console.log("D")
    }else if(yourScore >= 0 && yourScore <= 49){
      console.log("F")
    }else{
      console.log("Enter valid score")
    }





// 16. ANS=>

let input = prompt("Enter the season");

if(input=="september" || input=="october" || input=="november"){
  console.log("The season is Autumn")
} else if(input=="december" || input=="january" || input=="february"){
  console.log("The season is Winter")
} else if(input=="march" || input=="april" || input=="may"){
  console.log("The season is Spring")
} else if(input=="june" || input=="july" || input=="august"){
  console.log("The season is Summer")
}else{
  console.log("Enter a valid season month key")
}




//  17. ANS=>

function daysInMonth(month) {
  if (month === 2 ) {
  
      return 28;
    
  } else if (month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12) {
    return 31;
  } else {
    return 30;
  }
}

console.log(daysInMonth(2))





// 18. ANS=>

function daysInMonth(month, year) {
  if (month === 2) {
    if (year % 4===0) {
      return 29;
    } else {
      return 28;
    }
  } else if (month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12) {
    return 31;
  } else {
    return 30;
  }
}

console.log(daysInMonth(2, 2028))




// 19. ANS=>  this question's solution is in "js file linking assignment" folder.




// 20. ANS=>

const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];

if (!shoppingCart.includes("Meat")) {
  shoppingCart.unshift("Meat");
}

if (!shoppingCart.includes("Sugar")) {
  shoppingCart.push("Sugar");
}

const index = shoppingCart.indexOf("Honey");
  shoppingCart.splice(index, 1);


const teaIndex = shoppingCart.indexOf("Tea");
  shoppingCart[teaIndex] = "Green Tea";

console.log(shoppingCart); //  [ 'Meat', 'Milk', 'Coffee', 'Green Tea', 'Sugar' ]




// 21. ANS=>

let countries = ["India", "America", "Australia", "Newzealand", "Ethiopia"];

if(countries.includes("Ethiopia")){

  let lastIndex = countries.length - 1;
  let lastCountry = countries[lastIndex];
  
  console.log(lastCountry.toUpperCase());

}else{
  countries.push("countries")
}

console.log(countries)





// 22. ANS=>

let ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

 // array sorting
ages.sort((a, b) => a-b)
console.log(ages);


// Finding the min and max age
let maxAge = -Infinity
let minAge = Infinity
for(let i=0; i<ages.length; i++){
if(maxAge<ages[i]){
  maxAge = ages[i]
 
}else if(minAge>ages[i]){
  minAge = ages[i]

}

}
console.log(`Minimum age is : ${minAge} and maximum age is : ${maxAge}`)


// Finding the median age

medianAge = ages[Math.floor(ages.length / 2)];
console.log("medianAge is :", medianAge, " Index of medianAge", ages.indexOf(medianAge))


// Finding the average age
let sumOfage = 0;
let count = 0;

for(let j = 0; j < ages.length; j++){
  sumOfage+=ages[j]
 count++;
 var averageAge = sumOfage/count
}

console.log(averageAge )
console.log(Math.round(averageAge))


// Finding the range of the ages

let range = maxAge-minAge;
console.log(range);


// Compare the value of (min - average) and (max - average);
let differenceMinAverage = Math.abs(minAge - averageAge);
let differenceMaxAverage = Math.abs(maxAge - averageAge);

console.log(differenceMinAverage);
console.log(differenceMaxAverage);







// 23. ANS ==>

let numberIs = prompt("Enter a number to check whether the number is prime or not");

function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 0; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

if (isPrime(numberIs)) {
  console.log(`${numberIs} is a prime number.`);
} else {
  console.log(`${numberIs} is not a prime number.`);
}








// 24. ANS ==>

let evenArray = [];
let oddArray = [];

for(let i = 0; i<=100; i++){
  if(i % 2 == 0){
    evenArray.push(i)
  }else{
    oddArray.push(i)
  }
}

console.log(evenArray);
console.log(oddArray);




// 25. ANS ==>

function calculateBMI(weight, height) {
  const bmi = weight / (height * height);
  if (bmi < 18.5) {
    return "Underweight";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    return "Normal weight";
  } else if (bmi >= 25 && bmi <= 29.9) {
    return "Overweight";
  } else {
    return "Obese";
  }
}
 console.log(calculateBMI(80, 5));



 
 // 26. ANS ==>
 
 function givenNumberByUser(num){
  let tableResult = num * 2;
  return tableResult
}

let calculateBy = givenNumberByUser(7);

console.log(calculateBy)





// 27. ANS ==>


function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 0; i <= 100; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

if (isPrime(numberIs)) {
  console.log(`${numberIs} is a prime number.`);
} else {
  console.log(`${numberIs} is not a prime number.`);
}




// 28. ANS ==>



// (a) =>
for(let i=3; i>=0; i--){
  let bag = "";
 for(let j=i; j<3; j++){
  bag+="*"
 }
 console.log(bag)
}



// (b) =>
for(let i=0; i<3; i++){
  let bag = "";
 for(let j=0; j<3; j++){
  bag+="*"
 }
 console.log(bag)
}



// (c) =>
for (let i = 0; i < 3; i++) {
  let str = '';
  for (let j = 1; j < 3-i; j++) {
    str += ' ';
  }
  for (let k = 0; k <= (2 * i); k++) {
    str += '*';
  }
  console.log(str);
}