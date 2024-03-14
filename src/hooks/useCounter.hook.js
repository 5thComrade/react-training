import { useState } from "react";

const useCounter = (initialValue) => {
  const [counter, setCounter] = useState(initialValue);

  const increment = () => {
    setCounter((prev) => prev + 1);
  };

  const decrement = () => {
    setCounter((prev) => prev - 1);
  };

  return [counter, increment, decrement];
};

export default useCounter;
