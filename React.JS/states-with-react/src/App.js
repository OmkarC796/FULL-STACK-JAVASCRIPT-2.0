import React, {useState} from 'react';

function App() {

  const [count, setCount] = useState(0)
  return (
    <div className="counter">
      <h1>App counter</h1>
      <div> {count} </div>
      <div className="buttons">
        <button></button>
        <button></button>
      </div>
    </div>
  );
}

export default App;
