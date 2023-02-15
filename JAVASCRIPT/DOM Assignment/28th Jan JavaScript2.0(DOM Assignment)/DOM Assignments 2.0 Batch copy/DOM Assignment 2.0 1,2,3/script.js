// adding Hire Me menu to navbar
const fetch_ul = document.querySelector("ul");

const li_for_hireMe = document.createElement("li");
// li_for_hireMe.innerHTML = "Hire Me";
const a_tag = document.createElement("a");

  a_tag.href = "#"
  a_tag.innerHTML = "Hire Me"

  li_for_hireMe.append(a_tag)

fetch_ul.append(li_for_hireMe)




// changing placeholder name of search input

const search_div = document.querySelector(".search-field>input");

search_div.setAttribute("placeholder", "Search My Project")





// changin name with iNeuron intelligence pvt ltd.

const changingWith_iNuronName_to_introPart = document.querySelector(".changingWith_iNeuron");

changingWith_iNuronName_to_introPart.innerHTML  = "iNeuron Intelligence Pvt Ltd"



// changing avatar

const change_avatar = document.querySelector(".hero-right-section>img");
change_avatar.src = "https://hiteshchoudhary.com/static/a8d73d1aac4c79e9bb689640e6090367/2eaab/person-image.jpg"

// add support me button


const forAdding_btn_div = document.querySelector(".hero-right-section-btns");

const support_button = document.createElement("button");

support_button.innerText = "Support Me"

forAdding_btn_div.append(support_button)