import React, {useState, forwardRef, useRef, createRef} from "react";
import './App.css';

function App() {
    const [index,setIndex] = useState(0)
    const refByUse = useRef()
    const refByCreate = createRef()
    if(!refByUse.current) refByUse.current = index
    if(!refByCreate.current) refByCreate.current = index
    return (
        <>
            <div>Current index is : {index}</div>
            <div>useRef is { refByUse.current}</div>
            <div>refByCreate is { refByCreate.current}</div>
            <button onClick={()=> setIndex(index + 1)}>click me </button>
        </>
    );
}


function Child({age}) {
    const ref = useRef()
  return <div>
      <button ref={ref}>fui</button>
      <Child2 ref={ref} />
  </div>
}

const Child2 = forwardRef(function (props,ref) {
    console.log(ref)
    return <div>
        123
    </div>
})

const DeepChild = React.memo(function ({age}) {
    return <div>
        {age.level1.level2}
    </div>
})

export default App;
