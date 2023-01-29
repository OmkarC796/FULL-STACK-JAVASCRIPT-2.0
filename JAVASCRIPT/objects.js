

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


  console.log(this)


  // there is two type of engine one is => rendering engine which is render the html css and design kind of stuffs
  // and second is javascript which can be v8 or else... winch render the js or backend kind of stuffs


  // node is a purely execution engine from the backend


  // string, number, bigint, boolean, null, undefined, symbol are not an object


  const obj1 = {
    game : "cricket",
    players : 11,
    kit : "bat and boll"
  }
console.log(obj1)



// constructor

  const obj2 = new Object()  
  obj2.name = "badminton";
  obj2.players = 4;
  obj2.kit = "cock and net"

  console.log(obj2)




  // property inhariting

  const power = {
    fly : true,
    level : Math.random() + 4
  }

const obj3 = Object.create(power);

console.log(Object.getPrototypeOf(obj3))




