// import logo from './logo.svg';
// import './App.css';

import {useState} from 'react';

// function Apptwo() {
//   return (
//     <div>
//       <h1>App Two</h1>
//     </div>
//   );
// }



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



function App() {
  return (
    
   <>
      <h1>App</h1>
      <p>Hello this is very first react on my vs code editor</p>
    
      <Counter/>
   </>
   
  );
}


export default App;
