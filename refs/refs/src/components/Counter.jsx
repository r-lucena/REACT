import { useRef, useState, useEffect } from 'react';

const Counter = ({ initialValue }) => {
  const [counter, setCounter] = useState(initialValue);
  const [direction, setDirection] = useState(null);
  const directionRef = useRef(null);

  useEffect(() => {
    if (counter > initialValue) {
      setDirection('up');
    } else if (counter < initialValue) {
      setDirection('down');
    } else {
      setDirection(null);
    }
  }, [counter, initialValue]);

  useEffect(() => {
    if (direction !== null) {
      directionRef.current = direction;
      console.log(direction);
    }
  }, [direction]);

  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  const handleDecrease = () => {
    setCounter(counter - 1);
  };

  return (
    <div>
      <p>Counter: {counter}</p>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrease}>-</button>
    </div>
  );
};

export default Counter;