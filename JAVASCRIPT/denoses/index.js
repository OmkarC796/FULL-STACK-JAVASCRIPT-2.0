const body = document.querySelector("body");

const h1 = document.createElement("h1");
   h1.innerText = "Omkar"
   const mob = document.createElement("p");

   mob.innerHTML = "202211002"

    const btn = document.createElement("button")

          btn.innerText = "submit"

          btn.addEventListener("click", myClick);
            
          function myClick(){
            const name = document.createElement("h2");
            if (name.innerText === "") {
               name.innerText = "omkar chauhan";
           } else {
               name.innerText = "";
               alert("clicked again")
           }
                body.append(name)
         }
         
     
      

body.append(h1, mob, btn)



const calculate = () => {
   const a=16;
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