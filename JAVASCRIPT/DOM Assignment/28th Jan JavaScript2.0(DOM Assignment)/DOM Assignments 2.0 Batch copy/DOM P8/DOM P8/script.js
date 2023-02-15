

const new_div = document.querySelector(".new");

// new_div.style.overFlow = "hidden"

const new_hr = document.createElement("hr");
new_hr.setAttribute("class", "hr_line")

const h2 = document.createElement("h2");
h2.setAttribute("class", "new_head")
h2.innerText = "omkar"
new_div.append(new_hr, h2)