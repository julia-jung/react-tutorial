import { useState } from 'react';

const UseStateBasics = () => {
  // console.log(useState(2));
  
  const value = useState('hello')[0];
  const func = useState('hello')[1];
  console.log(value);
  console.log(func);
  
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
    console.log(count);
  }

  return <div>
    <h2>useState basics</h2>
    <h3>Current count is: {count}</h3>
    <button onClick={increaseCount}>increase</button>
  </div>;
};

export default UseStateBasics;
