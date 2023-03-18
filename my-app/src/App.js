// import logo from './logo.svg';
// import './App.css';

import {useState} from 'react';

function Apptwo() {
  return (
    <div>
      <h1>App Two</h1>
    </div>
  );
}



function Counter() {
  let [count, setCount] = useState(100)

 function oneUp(){
  setCount(count + 1);     // here increasing the value
 }

 return (
  <div>
     <button
     onClick={oneUp}>
        Count : {count}
  </button>
  </div>
 );
}


function SuperHeros(){
  const [hero, setHero] = useState(['Superman', 'Spiderman', 'Ironman']);

  const [name, setName] = useState(() => "antman");

  const onAddName = () => {
    setHero([...hero, name])
    setName("")
  }

  return (
    <div>
      <ul>
        {hero.map((h) => (
          <li key={h}>{h}</li>
        ))}
      </ul>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
      <button onClick={onAddName}>Add value</button>
    </div>
  )
}

// trying to make some another function for next operation

               
function App() {                   // in this function adding all function for visualization on the document
  return (
    
   <>
      <h1>App</h1>
      <p>Hello this is very first react app on my vs code editor</p>
    <Apptwo/>
      <Counter/>
      <Counter/>
      <Counter/>
      <Counter/>
      <Counter/>
      <SuperHeros/>
   </>
   
  );
}


export default App;
