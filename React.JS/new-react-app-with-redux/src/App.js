import React, { useState } from 'react'

import { increment, decrement, incerementByValue } from "./features/counter/counterSlice";

import { useSelector, useDispatch } from "react-redux";

function App() {

  const [input, setInput] = useState("")
  return (
    <div>App</div>
  )
}

export default App;