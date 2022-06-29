
import './App.css';
import React, { useState }from 'react';

function App() {
  const [count, setCount] = useState(0);
   return (
    <div className="counter">
      <h1>React Counter {count}</h1>
      <span className="counter_output"></span>
      <div className="btn_container">
        <button className="increase_button" onClick={()=>setCount(count +1) }>+</button>
        <button className="decrease_button" onClick={()=>setCount(count -1) }>-</button>
        <button className="reset_button"    onClick={()=>setCount(0) }>reset</button>
      </div>
    </div>
  );

   }

export default App;