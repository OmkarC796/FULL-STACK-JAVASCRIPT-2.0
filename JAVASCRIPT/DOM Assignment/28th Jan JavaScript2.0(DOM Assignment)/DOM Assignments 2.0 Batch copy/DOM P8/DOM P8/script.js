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
const body = document.querySelector("body");
      body.style.backgroundImage = "none";


// task : 3
let navabar = document.querySelector("#navbarTogglerDemo01")


function togglerNav() {
      
      let div = document.createElement("div")
      let li1 = document.createElement("li");
      li1.innerHTML = "Home";
      let li2 = document.createElement("li");
      li2.innerHTML = "New"
      let li3 = document.createElement("li");
      li3.innerHTML = "Popular"
      let li4 = document.createElement("li");
      li4.innerHTML = "Trending"
      let li5 = document.createElement("li");
      li5.innerHTML = "Categories"
      div.append(li1,li2,li3,li4,li5)
      navabar.append(div)
}

console.log(togglerNav())

let navbar_toggler = document.querySelector("#btn");
navbar_toggler.addEventListener("click", togglerNav)
