





const submitButton = document.querySelector(".submit");

submitButton.addEventListener("submit", 
function (event){
    event.preventDefault();

    const userName = document.querySelector(".userName").value;
    
    const enterName = document.querySelector("enterName");
    enterName.innerHTML = userName

    
    const userEmail = document.querySelector(".userEmail").value;
    
    const enterMail = document.querySelector(".enterMail");
    enterMail.innerHTML = userEmail
    
    
    const userMessage = document.querySelector(".userMessage").value;
        
    const enterMessage = document.querySelector(".enterMessage");
    enterMessage.innerHTML = userMessage

console.log(userName);
  

})

