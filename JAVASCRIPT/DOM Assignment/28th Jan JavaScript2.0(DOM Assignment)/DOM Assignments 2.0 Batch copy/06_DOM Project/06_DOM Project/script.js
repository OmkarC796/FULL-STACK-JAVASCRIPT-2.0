"use strict";

// task 1: add iNeuron logo image on to the top

  const iNeuron_logo = document.querySelector(".logo");
  iNeuron_logo.src = "./assets/ineuron-logo.png";


// task 2: change the price to the document and add one more linkedin brand logo
  const price = document.querySelector(".app_price>span");
  price.innerHTML = "$10";

  const for_icon = document.querySelector(".footer_social");
  const div_for_icon = document.createElement("div");
  
  const linkedIn_icon = document.createElement("i");
  linkedIn_icon.setAttribute("class", "fa-brands fa-linkedin");

  div_for_icon.append(linkedIn_icon);
  for_icon.append(div_for_icon);
