import React, {useState, PureComponent, useEffect} from "react";
import './App.css';

function App() {
    const [age,setAge] = useState(0)
    return (
        <>
            <button onClick={()=>setAge(age+ 1)}>fuck add </button>
            <Child age={age} />
        </>
    );
}

const xx = {
    level1: {
        level2: 0
    }
}
function Child({age}) {
    xx.level1.level2 = age
  return <div>
      {age}
    <DeepChild age={xx} />
  </div>
}

const DeepChild = React.memo(function ({age}) {
    console.log(1)
    return <div>
        {age.level1.level2}
    </div>
})

export default App;
