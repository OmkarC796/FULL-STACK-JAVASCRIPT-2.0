"use strict"

// task: 1 => added new hr h2 and p elements.
const new_div = document.querySelector(".new");

new_div.style.overflow = "scroll"

const new_hr = document.createElement("hr");
new_hr.setAttribute("class", "hr-line")

const h2 = document.createElement("h2");
h2.setAttribute("class", "new-head")


h2.innerHTML = "This is my custom heading";


const p = document.createElement("p");
p.setAttribute("class", "new-p")
p.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, ipsam cumque totam facilis magnam natus vel dignissimos ipsum recusandae  fuga."

new_div.append(new_hr, h2, p);


// task: 2 => background remove
let body = document.querySelector("body");
      body.style.backgroundImage = "none";


// task : 3

const togglerBtn = document.querySelector(".navbar-toggler");

togglerBtn.addEventListener("click", toggeler)

function toggeler(){
      const navbarTogglerDemo01 = document.getElementById("navbarTogglerDemo01")
      
      const div = document.createElement("div");
      div.setAttribute("class", "div")

//       const li1 = document.createElement("li")
//       li1.innerText = "Home";
//       li1.style.listStyle = "none"
//       li1.style.color = "gray"

//       const li2 = document.createElement("li")
//       li2.innerText = "New";
//       li2.style.listStyle = "none"
//       li2.style.color = "gray"

//       const li3 = document.createElement("li")
//       li3.innerText = "Popular";
//       li3.style.listStyle = "none"
//       li3.style.color = "gray"

//       const li4 = document.createElement("li")
//       li4.innerText = "Trending";
//       li4.style.listStyle = "none"
//       li4.style.color = "gray"
      
//       const li5 = document.createElement("li")
//       li5.innerText = "Categories"
//       li5.style.listStyle = "none"
//       li5.style.color = "gray"

const lists = document.querySelector(".navbar-nav")
console.log(lists);


      div.append(lists)

       navbarTogglerDemo01.append(div)




}
