import { useState } from 'react';

const CodeExample = () => {
  const [value, setValue] = useState(0);

  const sayHello = () => {
    console.log('hello');

    // this cause infinite loop
    // 1. initial render, sayHello is called
    // 2. inside sayHello, setValue trigger re-render
    // 3. then sayHello will be called
    // ...
    // setValue(value + 1);
  }

  sayHello();

  return (
    <div>
      <h1>value : {value}</h1>
      <button className='btn' onClick={() => setValue(value + 1)}>
        click me
      </button>
    </div>
  );
};
export default CodeExample;
