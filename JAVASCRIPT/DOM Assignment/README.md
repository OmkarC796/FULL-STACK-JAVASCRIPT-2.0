# DOM ASSIGNMENT 1

## 04_DOM Project:

### Output code:

 let title = document.querySelector("title")
title.innerText = "04_DOM_Project";


// title menthioned using DOM

const second_title = document.querySelector(".title_2")
second_title.innerHTML = "The Archer";


const fourth_title = document.querySelector(".title_4")
fourth_title.innerHTML = "The Goblin";


// background Change using DOM

const Barbarian_bottom_div = document.querySelector("#first_bottom");
Barbarian_bottom_div.style.backgroundColor = "#ec9b3b";
Barbarian_bottom_div.style.color = "#ffffff";

const Archer_bottom_div = document.querySelector("#second_bottom");
      Archer_bottom_div.style.backgroundColor = "#ee5487";
      Archer_bottom_div.style.color = "#ffffff";

const Giant_bottom_div = document.querySelector("#third_bottom");
      Giant_bottom_div.style.backgroundColor = "#f6901a";
      Giant_bottom_div.style.color = "#ffffff";

const Goblin_bottom_div = document.querySelector("#fourth_bottom");
      Goblin_bottom_div.style.backgroundColor = "#82bb30";
      Goblin_bottom_div.style.color = "#ffffff";

const Wizard_bottom_div = document.querySelector("#last_bottom");
      Wizard_bottom_div.style.backgroundColor = "#4facff";
      Wizard_bottom_div.style.color = "#ffffff";

# DOM ASSIGNMENT 2

## 05_DOM Project:

### Output code:

// task: adding new Card and Recipes


const navbar = document.querySelector(".btn_div");

const subscription_button = document.createElement("a");
      subscription_button.classList.add("btn");
      subscription_button.textContent="Pro Subscription";

      navbar.append(subscription_button);


const recipes_category = document.querySelector(".recipes_categ");

const chinese_category = document.createElement("a");
      chinese_category.classList.add("chinese")
      chinese_category.textContent = "Chinese(7)"

      recipes_category.append(chinese_category);


const Beverages_card = document.querySelector(".recipe-gallery");

const div = document.createElement("div")
      div.style.boxShadow = "rgba(0, 0, 0, 0.35) 0px 5px 15px"

const img = document.createElement("img");
      img.src = "./img/arisa-chattasa-VsAV_HjJpDc-unsplash.jpg";
      img.style.width = "100%"
      img.style.height = "200px"
      img.style.marginBottom = "10px"

const h5 = document.createElement("h5");
      h5.innerText = "Beverages"
      h5.style.fontSize = "20px"
      h5.style.marginBottom = "10px"

const p = document.createElement("p");
      p.innerText = "Prep: 5min | Cook: N/A"  

      div.append(img, h5, p)
      Beverages_card.append(div)

let colorP_tags = document.getElementsByClassName("recipe-disp");
    colorP_tags.style.color = "blueviolet"

let colorH5_tags = document.getElementsByClassName("recipe-name");
    colorH5_tags.style.color = "blueviolet"


# DOM ASSIGNMENT 3

## 06_DOM Project:

### Output code:

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

# DOM ASSIGNMENT 4

## DOM Assignment 2.0 1,2,3

## DOM assignment 1: Index Page project

### Output code:

// Assignment 1
// task 1: adding Hire Me menu to navbar
const fetch_ul = document.querySelector("ul");

const li_for_hireMe = document.createElement("li");
const a_tag = document.createElement("a");

  a_tag.href = "#"
  a_tag.innerHTML = "Hire Me"

  li_for_hireMe.append(a_tag)

fetch_ul.append(li_for_hireMe)




// task 2: changing placeholder name of search input

const search_div = document.querySelector(".search-field>input");

search_div.setAttribute("placeholder", "Search My Project")





// task 3: changin name with iNeuron intelligence pvt ltd.

const changingWith_iNuronName_to_introPart = document.querySelector(".changingWith_iNeuron");

changingWith_iNuronName_to_introPart.innerHTML  = "iNeuron Intelligence Pvt Ltd"



// task 4: changing avatar

const change_avatar = document.querySelector(".hero-right-section>img");
change_avatar.src = "https://hiteshchoudhary.com/static/a8d73d1aac4c79e9bb689640e6090367/2eaab/person-image.jpg"

// task 5: add support me button


const forAdding_btn_div = document.querySelector(".hero-right-section-btns");

const support_button = document.createElement("button");

support_button.innerText = "Support Me"

forAdding_btn_div.append(support_button)


## DOM assignment 2: IAbout Page project

### Output code:

// task1 add new project menu to navber 

const chenging_project = document.querySelector(".chenging_project");

chenging_project.innerHTML = "Projects";


// task2 add new accordian div with new strength and description

const accordian_wrapper = document.querySelector(".accordian-wrapper");

const accordian_div = document.createElement("div");
accordian_div.setAttribute("class", "accordian");

const h3 = document.createElement("h3");
h3.innerHTML = "Skills";

const p = document.createElement("p");


p.innerHTML = "I posses a very good command over the Full Stack Development technologies like MERN which can be seen in my work over the GitHub."

accordian_div.append(h3, p);

accordian_wrapper.append(accordian_div)




let accordian = document.querySelectorAll(".accordian h3");
accordian.forEach((element) => {
  element.addEventListener("click", () => {
    let para = element.nextElementSibling;
    if (para.style.display === "block") {
      para.style.display = "none";
    } else {
      para.style.display = "block";
    }
  });
});


## DOM assignment 3:  Page project

### Output code: