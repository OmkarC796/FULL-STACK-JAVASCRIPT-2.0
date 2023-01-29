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




// promise  