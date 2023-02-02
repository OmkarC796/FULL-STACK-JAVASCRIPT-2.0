const x = "omkar";
console.log(x);

// 9120973579 mausi


// let fname =  "omkar Chauhan";

// // let print it

// console.log(fname)


// const body = document.querySelector("body");

// const h1 = document.createElement("h1");
//    h1.innerText = "Omkar"
//    const mob = document.createElement("p");

//    mob.innerHTML = "202211002"

//     const btn = document.createElement("button")

//           btn.innerText = "submit"

//           btn.addEventListener("click", myClick);
            
//           function myClick(){
//             const name = document.createElement("h2");
//             if (name.innerText === "") {
//                name.innerText = "omkar chauhan";
//            } else {
//                name.innerText = "";
//                alert("clicked again")
//            }
//                 body.append(name)
//          }
         
     
      

// body.append(h1, mob, btn)



// const calculate = () => {
//    const a=16;
//    const b=40;
//    const c = a+b;
//    console.log(c)
// }

// calculate();

// function myf(){
//    const a=12;
//    const b=40;
//    const c = a+b;
//    return c;
// }
// console.log(myf())

// const myFun = () => {
//    const obj = {
//       name: "omkar",
//       age: 26,
//       mob: 124578787,
//       hobbies:["running", "biking"],
//       add: {
//          city:"jaunpur",
//          country:"India",
//       }
//    }
  
//    obj.add["pin"]="222";
//    console.log(obj.add,)
//    for(let i=0; i<obj.hobbies.length; i++){
//       console.log(obj.hobbies[i])
//    }
//    console.log(obj)
// }

// myFun();

// let name = "omkar";
// let bag =  "";

// for(let i=0; i<name.length; i++){
//    if(i%2==0){
//       bag+=name[i].toUpperCase();
//    }else{
//       bag+=name[i].toLowerCase();
//    }
// }
// console.log(bag)


// let fname = "Omkar";

// let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// let lower = "abcdefghijklmnopqrstuvwxyz";


// let jhola = "";

// for(let i=0; i<fname.length; i++){
  
//    for(let j=0; j<upper.length; j++){
//       if(fname[i]==upper[j]){
//          jhola+=lower[j];
//       }

//    }
  
// }
// console.log(jhola)

   
// let body = document.querySelector("body")

// body.addEventListener("click", myClick);

// function myClick(){

//    let div = document.createElement("div");


//    div.classList.add("circle")

//    div.style.left = Eventxp

//    body.appendChild(div)
// }

//   let val = confirm("Are you sure?")
//   if(val){
//    document
//   }


//   let prop = prompt("solve this 2-1=?")




const PI = Math.PI
console.log(PI) 

console.log(Math.round(PI))  // 3 nearest round value

console.log(Math.round(9.85)) // 10

console.log(Math.floor(PI)) //  3 rounded down

console.log(Math.ceil(PI)) // 4 rounded up

console.log(Math.min(-1, 2, 10, 5)) // -1 return the minimmum value

console.log(Math.max(-1, 2, 3, 4, 20)) // 20 return the maximum value

console.log(Math.random()) // some random value between 0 to 10

console.log(new Date())

let now = new Date();

console.log(now)

console.log(now.toString())

console.log(now.getFullYear())

console.log(now.getMonth())


console.log(Math.pow(3,3))

console.log(Math.log(2));

console.log(Math.sin(90))


//ternary operator

//symbol => ? and  :  

//condition ? True : False;

// let raining = true;
let raining = false;

raining ? console.log('It is Raining') : console.log('It is not Raining');


// let loggedIn = false;

let loggedIn = true;


raining ? console.log('if logged in show LOG OUT button') : console.log('if logged out show LOG IN button');


function btnFunc() {


}




// Loops ==>

// 1. do while loops =>

let i = 6;
do {
    console.log('Value of i is :', i);
    i++;
} while(i <= 5);



// 2. while loops =>

let j=6; 
while( j <= 5){
    console.log('Value of J is :', j)
}





// look at to the bellow how Node.JS run a new server
// it's all the complete setup to run my page on the server directly



const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>J.S.</title>
      <style>
  
        .circle{
          width: 50px;
          height: 50px;
          background-color: #ffffff;
          border-radius: 100%;
        }
        body{
          background-color: black;
          width: 100%;
          height: 100vh;
          color: #ffffff;
  
        }
     
  .grid-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 300px 300px;
    grid-gap: 10px;
  }
  
  .grid-item {
    background-color: #eee;
    display: flex;
    align-items: center;
    justify-content: center;
  }
      </style>
  </head>
  <body>
       <h1>Javascript begining</h1>
      <div class="grid-container">
          <!-- <div class="grid-item">Item 1</div>
          <div class="grid-item">Item 2</div>
          <div class="grid-item">Item 3</div>
          <div class="grid-item">Item 4</div>
          <div class="grid-item">Item 5</div>
          <div class="grid-item">Item 6</div>
        </div>
        <button id="btn" onclick="btnFunc()"></button> -->
  </body>
  </html>
  <script src="./variable.js"></script>
  
  `);
 
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});







// Inbuilts IN ARRAY


// ARRAY

  let fruits = ['apple','bada apple',  'chhota apple', 'double apple'];

  fruits.splice(2, 1, 'kharab apple', 'acha apple');

  console.log(fruits)


  let nameSlice = ["omkar", "rajesh", "mohan", "kamal"];

  console.log(nameSlice.slice(2,3));

  

  // concatination

  let arr1 = [1,2,3,4];
  let arr2 = [4,5,6,7,8,9]
  let arr3 = [5,2,8,3,4]

  let arr = arr1.concat(arr2)
  let allConcat = arr1.concat(arr2, arr3)
  console.log(arr)
  console.log(allConcat)



  // Fill

  let arr4 = [2,4,6,8,5];
  arr4.fill("omkar", 2, 4);
  console.log(arr4);



  // isArray

  let num = [1,2,3,8,6];
  console.log(Array.isArray(num));


  // join

  let Arr = [5,6,8,2, 'omkar'];
  console.log(Arr.join(" "))

  // Map

  let squreRt = [1,2,3,4,50];
  console.log(squreRt.map(Math.sqrt))


// Pop

let nums = [1,3,5,4];
console.log(nums.pop())


//reverse 

let numRev = [5,4,6,8,3];

console.log(numRev.reverse());



// shift 

let numsShift = ["Apple", "Mango", "Banana", "Orange"];
console.log(numsShift.shift());



//sort

let nameSort = ["omkar", "kundan", "rabi", "rajesh"];

console.log(nameSort.sort());



// unshift

let fruitsUnshift = ["Apple", "Bada Apple", "Chhota Apple", "Double Apple"];
console.log(fruitsUnshift.unshift("Apple1", "Apple2"));


// converting to array using split() method

let myName = "OMKAR";

let arrayMy = myName.split("");
console.log(arrayMy)




// for of

let fruitsOf = ["Apple", "Bada Apple", "Chhota Apple", "Double Apple"];

let upperFruit = [];

for(const badaLetter of fruitsOf){
  upperFruit.push(badaLetter.toUpperCase());
}
console.log(upperFruit);



// break and continue

for(let i=0; i<=5; i++){
  if(i==3){
    break;                // break means stop at that position and exit or come out or stop the loop
  }
  console.log(i)
}

for(let i=0; i<=5; i++){
  if(i==3){
    continue;                // continue means just skip that index and continue to loop 
  }
  console.log(i)
}






// function


function sum(value1, value2){
  let sumOf = value1+value2;

  console.log(sumOf)
}



sum(12,28)
sum(12,29)
sum(16,23)
sum(52,983)
sum(52,83)
sum(19,23)
sum(126,23)





function diff(v1, v2){
  let diffOf = v1-v2;

  console.log(diffOf)
}

diff(32,65);



function rectangle(length, width){
 
  const rectangleArea = length*width;

  console.log(rectangleArea)
}

rectangle(10, 30)




// original Function

function sum(val1, val2){
  const result  = val1 + val2;

  return result;
}

let add = sum(12,45);

console.log(add)



function URL(url, domain){
  const connection = "https://";
  const reslt = connection + url + domain;
  
  return reslt;
}

let mywebsite = URL("codewithomkar", ".com");

console.log(mywebsite)




function math(arr){
  let sum = 0;
  for( let i=0; i<arr.length; i++){
    sum+=arr[i]
  }
  return sum;
}

let array = [4, 5, 7, 8, 90];

let cal = math(array)
console.log(cal)





function myFun(){
  let sum = 0; 
  for(let i = 0; i<arguments.length; i++){      // arguments is pre-defined from the side of js
    sum+=arguments[i]
  }
  return sum;
}

let calcu = myFun(5, 6, 8, 2, 3)
console.log(calcu)





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



//     - The same groups apply to both men and women.
//     - Underweight: BMI is less than 18.5
//     - Normal weight: BMI is 18.5 to 24.9
//     - Overweight: BMI is 25 to 29.9
//     - Obese: BMI is 30 or more

// function calculateBMI(weight, height){
//   const bmi = weight / (height * height);

//   if(bmi < 18.5){
//     return "underweight"
//   }else if(bmi >= 18.5 || bmi <= 24.9 ){
//     return "Normal"
//   }else if( bmi >= 25 || bmi <=29.9){
//     return "Overweight"
//   } else {
//     return "Obese"
//   }
// }


// console.log(calculateBMI(800, 5))



