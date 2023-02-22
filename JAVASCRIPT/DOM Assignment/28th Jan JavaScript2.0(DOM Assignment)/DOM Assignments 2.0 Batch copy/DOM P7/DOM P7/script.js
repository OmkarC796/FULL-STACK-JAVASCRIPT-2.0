
'use strict'

// task: 1

let removed_languages = document.querySelectorAll("a");

for(let i=0; i<removed_languages.length; i++){
 if(i%2!==0){

 removed_languages[i].remove();
    
 }

}



// task: 2


     
function catchInput() {
  let value = document.querySelector("input").value;
  localStorage.setItem("input", JSON.stringify(value));
}

let input = document.querySelector("input");
input.disabled = false;

const submit_button = document.querySelector(".main__form-btn");
submit_button.addEventListener("click", catchInput);
submit_button.style.cursor = "pointer";
    submit_button.disabled = false;
  
