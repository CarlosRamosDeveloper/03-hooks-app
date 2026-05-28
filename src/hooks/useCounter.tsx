import { useState } from 'react';

export const useCounter = (initialValue: number = 1) => {
  const [counter, setCounter] = useState(initialValue);

  const incrementValue = () => {
    if (counter >= 151) return;
    setCounter(counter + 1);
  };

  const decrementValue = () => {
    if (counter <= 1) return;
    setCounter(counter - 1);
  };

  return {
    counter: counter,

    incrementValue: incrementValue,
    decrementValue: decrementValue,
  };
};
