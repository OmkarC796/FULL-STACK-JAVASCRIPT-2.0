

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




// define property method

// const obj4 = Object.create({});

// Object.defineProperty(obj4, "book", {
//   // category:"promming languages"           this method will not work
   
//   get: () => "programming language"

// });

// console.log(obj4)
// console.log(obj4.book)



// enumerable  
const obj4 = Object.create({});
Object.defineProperty(obj4, "book", {

  get: () => "programming language",

  enumerable:true                       // it means if we want to loop on the obj then we need to do enumerable flag on or mention it as true


});

for(const k in obj4){
  console.log(`Value is : ${k}`)
}



// using "this" keyword adding some value in global object key property

const obj5 = {
  movie : "avangers",
  part : "",

  addValue : function () {
    this.part += "four";
    // console.log(this)
    return this;
  },

  addNowValue : () => {          // this arrow function methood would not be applicable because it will give only undefined result
    this.part += "four";
    console.log(this)
  }
  
  
}
console.log(obj5.addValue())

// chaining
console.log(obj5.addValue().addValue().addValue())


