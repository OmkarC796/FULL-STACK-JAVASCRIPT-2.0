// Promise

// const { rejects } = require("assert");
// const { resolve } = require("path");

// const makePromise = new Promise((resolve, reject) => {

//     setTimeout(()=>{
//         const techs = ["HTML", "JAVASCRIPT", "TAOLWIND", "CSS"];
//         if(techs.length>0){
//             resolve("Completed")
//         }else{
//             reject("Incomplete")
//         }
//     }, 3000)

// }) 



// // 2. second of promise operation

// makePromise
// .then((result) => {
//     console.log(result)
// })
// .catch((result)=>{
//     console.log(result);
// })


const makePromise = new Promise((resolve, reject) => {

    setTimeout(()=>{
        const techs = ["HTML", "JAVASCRIPT", "TAOLWIND", "CSS"];
        if(techs.length>0){
            resolve("Completed")
        }else{
            reject("Incomplete")
        }
    }, 3000)

}) 



// 2. second of promise operation

makePromise
.then((result) => {
    console.log(result)
})
.catch((result)=>{
    console.log(result);
})
