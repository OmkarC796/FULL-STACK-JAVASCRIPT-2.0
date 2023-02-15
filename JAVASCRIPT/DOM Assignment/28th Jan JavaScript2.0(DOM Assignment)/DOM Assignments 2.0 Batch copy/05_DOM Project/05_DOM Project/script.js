const navbar = document.querySelector(".btn_div");
const subscription_button = document.createElement("a");
      subscription_button.classList.add("btn");
      subscription_button.textContent="Pro Subscription";

      navbar.append(subscription_button);

// const recipes_container = document.querySelector(".card>h5");

// recipes_container.style.color = "blueviolet"

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