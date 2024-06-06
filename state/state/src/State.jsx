import React, { useState } from 'react';


const CounterDisplay = ({ counter }) => {
  return (
    <h2>Counter: {counter}</h2>
  );
};


const Counter = ({ initialCounter = 0, decreaseAmount = 1}) => {
  const [counter, setCounter] = useState(initialCounter);


  const handleIncrement = () => {
    setCounter(counter + 1);
  };
  const handleDecrease = () => {
    setCounter(counter - decreaseAmount);
  };
  const handleReset = () => {
    setCounter(initialCounter);
  };


  return (
    <div>
      <CounterDisplay counter={counter} />
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrease}>-</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default Counter;