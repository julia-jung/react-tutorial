import { useEffect } from "react";
import { useState } from "react";

const CleanupFunction = () => {
  const [toggle, setToggle] = useState(false);
  console.log('render');
  return (
    <div>
      <h2>cleanup function</h2>
      <button className='btn' onClick={() => setToggle(!toggle)}>toggle</button>
      {toggle && <RandomComponent />}
      {/* RandomComponent is mounted and unmounted depends on the value of tooggle */}
    </div>
  );
};

const RandomComponent = () => {
  useEffect(() => {
    // console.log('hmm this is interesting');
    // const intervalId = setInterval(() => {
    //   console.log('hello from interval');
    // }, 1000);
    // return () => {
    //   clearInterval(intervalId);
    // }

    const someFunc = () => {
      // some logic
    };
    window.addEventListener('scroll', someFunc);
    window.removeEventListener('scroll', someFunc);
  }, []);
  return <h1>This is random component</h1>
}

export default CleanupFunction;
