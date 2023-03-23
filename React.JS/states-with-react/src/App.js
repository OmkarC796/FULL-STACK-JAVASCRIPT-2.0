import React, {useState} from 'react';

function App() {

  const [count, setCount] = useState(0)

const incrementCount = () => {
  setCount(count+1)
}

const decrementCount = () => {
  setCount(count-1)
}

  return (
    <div className="counter">
      <h1>App counter</h1>
      <div> {count} </div>
      <div className="buttons">
        <button onClick={incrementCount}>+</button>
        <button onClick={decrementCount}>-</button>
      </div>
    </div>
  );
}

export default App;
