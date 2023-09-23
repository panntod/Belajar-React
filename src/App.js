import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  
  const increment = () => {
    setCount(count+1)
  }

  const decrement = () => {
    setCount(count-1);
  }

  return (
    <div className="container mx-auto mt-8 text-center">
    <h1 className="text-4xl font-bold mb-4">Counter App</h1>
    <p className="text-2xl mb-4">Count: {count}</p>
    <div className="flex justify-center space-x-4">
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        onClick={increment}
      >
        Increment
      </button>
      <button
        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        onClick={decrement}
      >
        Decrement
      </button>
    </div>
  </div>
  );
}

export default App;