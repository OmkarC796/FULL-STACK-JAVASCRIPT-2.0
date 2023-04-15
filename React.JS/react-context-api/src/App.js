import { useState, createContext } from "react";

import './App.css';

import  Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";

export const myContext = createContext()

// import UserCard from "./Components/UserCard";


function App() {
const [name, setName] = useState("");
const [color, setColor] = useState("");


const myname = (event) => {
  setName(event.target.value);
}

const myColor = (event) => {
  setColor(event.target.value)
}
  return (
    <>
    <myContext.Provider value={{name, color}}>
     <h1>Hello React</h1>
     <p>This app for api context by which can fetch the data and all</p>
     <Navbar/>
     <form action="">
      <input type={"text"}
      placeholder="Enter User Name"
      value={name}
      onChange={myname  } />
      <input type={"text"}
      placeholder="Enter color name"
      value={color} 
      onChange={myColor}/>
     </form>
     <HeroSection/>
</myContext.Provider>
    </>
  );
}

export default App;
