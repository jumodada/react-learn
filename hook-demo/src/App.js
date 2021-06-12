import React, {useState, forwardRef, useRef, createRef} from "react";
import './App.css';

let index1 = 0
function App() {
    const [index,setIndex] = useState(0)
    return (
        <>
            <Child />
            <Child />
        </>
    );
}
function useCount() {
    const [count,setCount] = useState(0)
    const increment = ()=> setCount(val=>val + 1)
    const decrement = ()=> setCount(val=>val - 1)
    return {
        count,
        increment,
        decrement
    }
}


function Child({age}) {
  const {count,increment} = useCount()
  return <div>
      <button onClick={increment}>{count}</button>
  </div>
}


export default App;
