import { useState } from 'react';

function CounterState() {
  const [count, setCount] = useState(0);
  const increase = () => setCount(() => count + 1);
  return (
    <>
      <h1>Counter</h1>
      <p>{count}</p>
      <button onClick={increase}>+</button>
      <button onClick={() => setCount(() => count - 1)}>-</button>
    </>
  );
}

export default CounterState;
