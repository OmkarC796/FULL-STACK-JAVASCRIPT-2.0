const { stringify } = require("querystring");



const array = ["omkar", "chauhan", "marhi", "jaunpur"]


Object.prototype.omkar = function(){
    console.log("this prototype practice")
}

array.omkar();            // here all omkar function properties inheriting by array



// all properties or value inhering or giving from one object to another object

const teaching  =  {
    subject : "web devlopment",
    language : "english"
}

const inHeritingObj = {
    isInheriting : true,
    fromTeaching : "taking propertis or value",
    __proto__ : teaching
}

console.log(inHeritingObj)



// get true lenght of  the string

Object.prototype.truelength = function () {                  // or =>  String.prototype.truelength
    console.log(`true length is : ${this.trim().length}`)
}



const myName  =   "   Omkar   "

myName.truelength()           // same as line number 12


