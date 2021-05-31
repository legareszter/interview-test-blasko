import React, { useState } from 'react';
import './App.css';
import ReverseEngineeringTask from "./ReverseEngineeringTask";

function App() {
  const [state, setState] = useState<string |null>(null);

  return (
    <div className="App">
      <div className="Header">Fruit Selector</div>
      <div className="Text">Selected: {state}</div>
      <div className="List">
        <div className="Item" onClick={()=> setState('Apple')}>🍎</div>
        <div className="Item" onClick={()=> setState('Orange')}>🍊</div>
        <div className="Item" onClick={()=> setState('Banana')}>🍌</div>
      </div>
    </div>
  );
}

export default App;
