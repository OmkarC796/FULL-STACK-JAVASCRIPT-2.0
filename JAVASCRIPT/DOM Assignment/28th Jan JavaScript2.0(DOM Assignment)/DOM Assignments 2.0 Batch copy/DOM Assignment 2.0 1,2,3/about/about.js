
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



