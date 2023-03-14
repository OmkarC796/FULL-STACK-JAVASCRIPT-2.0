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
  setCount(count + 1);
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
  const [hero, setCount] = useState(['Superman', 'Spiderman', 'Ironman']);

  return (
    <div>
      <ul>
        {hero.map((h) => (
          <li key={h}>{h}</li>
        ))}
      </ul>
    </div>
  )
}

// trying to make some another

               
function App() {
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
