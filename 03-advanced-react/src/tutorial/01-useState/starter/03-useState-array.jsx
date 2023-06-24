import { useState } from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  const [people, setPeople] = useState(data);

  const deletePerson = (id) => {
    // const restPeople = people.filter(person => person.id !== id);
    // setPeople(restPeople);
    setPeople(people.filter(person => person.id !== id));
  }


  return <div>
    <h2>useState array example</h2>
    <ul>
      {people.map(person => {
        return <li key={person.id}>
          <span>{person.name}</span>
          <button onClick={() => deletePerson(person.id)}>delete</button>
        </li>;
      })}
    </ul>
    <button onClick={() => setPeople([])}>Clear all</button>
    <button onClick={() => setPeople(data)}>Rollback</button>
  </div>;
};

export default UseStateArray;
