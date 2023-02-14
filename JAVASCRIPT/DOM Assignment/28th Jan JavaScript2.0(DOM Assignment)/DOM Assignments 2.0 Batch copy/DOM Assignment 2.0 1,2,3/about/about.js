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


const chenging_project = document.querySelector(".chenging_project");

chenging_project.innerHTML = "Projects";



const accordian_wrapper = document.querySelector(".accordian-wrapper");

const accordian_div = document.createElement("div");
accordian_div.classList.add = "accordian";

const h3 = document.createElement("h3");
h3.innerHTML = "Skills";

const p = document.createElement("p");
p.innerText = "I posses a very good command over the Full Stack Development technologies like MERN which can be seen in my work over the GitHub."

accordian_div.append(h3, p);

accordian_wrapper.append(accordian_div)

