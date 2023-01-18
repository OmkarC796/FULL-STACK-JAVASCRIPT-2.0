const body = document.querySelector("body");

const h1 = document.createElement("h1");
   h1.innerText = "Omkar"
   const mob = document.createElement("p");

   mob.innerHTML = "202211002"
body.append(h1, mob)


const calculate = () =>{
   const a=1546;
   const b=40;
   const c = a+b;
   console.log(c)
}

calculate();

function myf(){
   const a=12;
   const b=40;
   const c = a+b;
   return c;
}
console.log(myf())

const myFun = () => {
   const obj = {
      name: "omkar",
      age: 26,
      mob: 124578787,
      hobbies:["running", "biking"],
      add: {
         city:"jaunpur",
         country:"India",
      }
   }
  
   obj.add["pin"]="222";
   console.log(obj.add,)
   for(let i=0; i<obj.hobbies.length; i++){
      console.log(obj.hobbies[i])
   }
   console.log(obj)
}

myFun();