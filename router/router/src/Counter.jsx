
import { useState } from 'react';

const Counter = ({ initialValue = 0, decreaseAmount = 1 }) => {
  const [counter, setCounter] = useState(initialValue);

  const handleIncrement = () => {
    setCounter(counter + 1);
  };
  const handleDecrease = () => {
    setCounter(counter - decreaseAmount);
  };

  return (
    <div>
      <h2>Counter: {counter}</h2>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrease}>Decrease</button>
    </div>
  );
};

export default Counter;