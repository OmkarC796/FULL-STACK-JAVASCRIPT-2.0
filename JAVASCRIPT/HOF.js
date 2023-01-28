// HOF => Higher Order Function
 
                   //OR

// Callback = simply means a functon is calling to another function that is callback fuction or higher order function

// example =. 

function a(){
    console.log("I am from fuction a, and I am called by another function")
}


function b(){
    a()
}

b()



// setTimeout(() => {
//     console.log("Hello Omkar")
// }, 3000)       ===>

function helloOmkar(){
    console.log("Hello Omkar")
}

setTimeout(helloOmkar, 3000)



setInterval(() => {
    console.log("hey again")
}, 2000);



// forEach

let greets = ["hello", "Hi", "hey"];

greets.forEach((val)=>{
console.log(val)
})


// map

let numb = [1,2,3,4];

numb.map((num) => {
    console.log(num*num)
})


// filter

let cont = ["India", "America", "Japan", "Israel"];

cont.filter((nam) => {
    console.log(nam.includes("pan"))
})
