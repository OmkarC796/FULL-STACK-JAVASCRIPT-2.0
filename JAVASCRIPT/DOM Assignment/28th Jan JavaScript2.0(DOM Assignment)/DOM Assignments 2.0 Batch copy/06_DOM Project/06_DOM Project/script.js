"use strict";

  const iNeuron_logo = document.querySelector(".logo");
  iNeuron_logo.src = "./assets/ineuron-logo.png";

  const price = document.querySelector(".app_price>span");
  price.innerHTML = "$10";

  const for_icon = document.querySelector(".footer_social");
  const div_for_icon = document.createElement("div");
  
  const linkedIn_icon = document.createElement("i");
  linkedIn_icon.setAttribute("class", "fa-brands fa-linkedin");



  div_for_icon.append(linkedIn_icon);
  for_icon.append(div_for_icon);