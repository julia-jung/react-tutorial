import { useState } from "react";

const UseStateGotcha = () => {
  const [value, setValue] = useState(0);

  const increase = () => {
    // setValue(value + 1);
    
    // setValue((currentState) => {
    //   const newState = currentState + 1;
    //   return newState;
    // });

    setTimeout(() => {
      console.log('clicked!');
      // setValue(value + 1);
      setValue((currentState) => {
        return currentState + 1;
      });
    }, 3000);

    console.log(value);
  }

  return <div>
    <h2>useState "gotcha"</h2>
    <h1>{value}</h1>
    <button onClick={increase} className='btn'>increase</button>
  </div>;
};

export default UseStateGotcha;
