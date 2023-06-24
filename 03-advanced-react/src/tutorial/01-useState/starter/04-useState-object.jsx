import { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({ name: 'Peter', age: 29, hobby: 'Watching movies' });
  const changePerson = () => {
    // setPerson({ name: 'John', age: 24, hobby: 'Reading books' });
    setPerson({ ...person, hobby: 'Reading books' });
  }

  return <div>
    <h2>useState object example</h2>
    <h3>{person.name}</h3>
    <h3>{person.age}</h3>
    <h4>Enjoys: {person.hobby}</h4>
    <button onClick={changePerson}>change person</button>
  </div>;
};

export default UseStateObject;
