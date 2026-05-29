import { useCounter } from '@/hooks';
import { useMemo } from 'react';

const heavyStuff = (iterationNumber: number) => {
  const heavyKey = 'HeavyStuffKey';
  console.time(heavyKey);

  for (let i = 1; i <= iterationNumber; i++) {
    console.log(`Iteration nº ${i}/${iterationNumber}`);
  }

  console.timeEnd(heavyKey);

  return `${iterationNumber} iteraciones realizadas`;
};

export const MemoCounter = () => {
  const { counter, incrementValue } = useCounter(100);
  const myHeavyValue = useMemo(() => heavyStuff(counter), [counter]);

  return (
    <div className="bg-gradient flex flex-col gap-4">
      <h1 className="text-2xl font-bold">Memo - UseMemo</h1>
      <hr />

      <h4>Counter: {counter}</h4>
      <h4>{myHeavyValue}</h4>

      <button
        className="bg-blue-500 text-white px-4 rounded-md py-2 cursor-pointer"
        onClick={incrementValue}
      >
        {' '}
        +1{' '}
      </button>
    </div>
  );
};
