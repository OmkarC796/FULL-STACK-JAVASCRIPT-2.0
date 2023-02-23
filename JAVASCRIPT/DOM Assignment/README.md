# DOM ASSIGNMENT 1

## Output code =>

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
