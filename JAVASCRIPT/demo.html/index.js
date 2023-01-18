const body = document.querySelector("body");

const h1 = document.createElement("h1");
   h1.innerText = "Omkar"
   const mob = document.createElement("p");

   mob.innerHTML = "202211002"
body.append(h1, mob)


const calculate = () =>{
   const a=12;
   const b=40;
   const c = a+b;
   return c;
}

calculate();

function myf(){
   const a=12;
   const b=40;
   const c = a+b;
   return c;
}
console.log(myf())