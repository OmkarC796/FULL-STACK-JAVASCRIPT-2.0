



let form = document.getElementById("form");

form.addEventListener("submit", entries);

function entries(e){
    e.preventDefault();
    
    let userName = document.querySelector(".userName").value;
    let enterName = document.querySelector(".enterName").value;
    // enterName.innerText = userName;
    enterName = userName;


    let userEmail = document.querySelector(".userEmail").value;
    let enterMail = document.querySelector(".enterMail").value;
    // enterMail.innerText = userEmail;
    enterMail = userEmail;


    let userMessage = document.querySelector(".userMessage").value;
    let enterMessage = document.querySelector(".enterMessage");
    // enterMessage.innerText = userMessage;
    enterMessage.setAtribute("placeholder",userMessage);

    alert("")
}





