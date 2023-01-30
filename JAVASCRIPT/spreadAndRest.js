// ...spread operrator


function someone(x, y){
    return x + y;
}

let val = [5, 7];             // is an array
// console.log(someone(val))

console.log(someone(...val))             // spread




// rest operator


  function sumWithRest (...args) {
       let sum = 0; 
       for(let i=0; i<args.length; i++){
             sum += args[i]
       }
       return sum
  }

  console.log(sumWithRest(1,2,3,5,4,6))




// Try and Catch

   try{

    console.log(omkar)

   }catch(error){
    console.log(error.name, "finding some errors")
   } finally{
    console.log("all good");
   }


   // throw   = need to explore it myself

   // Diffrent type of errors we have in javascript  ==>
         
         // in javascript there are three type of error only
        
         // 1. refferance error  --- majority of this type of error here
         // 2. syntax error
         // 3. TypeError



// event loop 
// event loop is a kind of javascript duty to excecution context that when do we need to execute the code and when the 
// some code is being execute the remains code will be waiting in queue to come that turn




// promise  

    // 1. pending
    // 2. fullfilled
    // 3. rejected
   

    // resolve and rejected


    // function countDaysInMonth(year, month) {
    //   return new Date(year, month, 0).getDate();
    // }
    // console.log(countDaysInMonth(2024, 2));


    // function daysInMonth(month, year) {
    //   if (month === 2) {
    //     if (year % 4===0) {
    //       return 29;
    //     } else {
    //       return 28;
    //     }
    //   } else if (month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12) {
    //     return 31;
    //   } else {
    //     return 30;
    //   }
    // }

    // console.log(daysInMonth(4, 2028))
   