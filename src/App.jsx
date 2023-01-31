import React, { useState } from "react";


function App() {
  let [count, setCount] = useState(0)

function plusbir(){
  setCount(prev => prev + 1)
  
}
function pluson(){
  setCount(prev => prev + 10)
  
}
function plusyuz(){
  setCount(prev => prev + 100)
}
function plusming(){
  setCount(prev => prev + 1000)
}




function minusbir(){
  setCount(prev => prev - 1)
  
}
function minuson(){
  setCount(prev => prev - 10)
  
}
function minusyuz(){
  setCount(prev => prev - 100)
}
function minusming(){
  setCount(prev => prev - 1000)
}
function resetson(){
  setCount(prev => 0)
}

  return (
    <div>
        <button onClick={plusbir}>+1</button>
        <button onClick={pluson}>+10</button>
        <button onClick={plusyuz}>+100</button>
        <button onClick={plusming}>+1000</button><br />
        <button onClick={minusbir}>-1</button>
        <button onClick={minuson}>-10</button>
        <button onClick={minusyuz}>-100</button>
        <button onClick={minusming}>-1000</button><br />
        <button onClick={resetson}>Reset</button>
        <h2>{count}</h2>
    </div>
  );
}

export default App;