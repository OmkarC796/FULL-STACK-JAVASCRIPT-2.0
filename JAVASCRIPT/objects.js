

// OBJECTS

 const userName = {
    firstName : "Omkar",
    lastName : "Chauhan",
    role : "code Lerner"
 }

 console.log(userName);

 console.log(userName.firstName);

 userName.role = "JS Learner"  // update
 userName.roleNext = "React.JS Learner" 

 console.log(userName);

  // for in loop

  for(let x in userName){
    console.log(userName[x])
  }