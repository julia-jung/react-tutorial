import { useState, useCallback, useMemo } from 'react';
import { data } from '../../../../data';
import List from './List';
import slowFunction from './slowFunction';

const LowerState = () => {
  const [people, setPeople] = useState(data);
  const [count, setCount] = useState(0);

  const value = useMemo(() => slowFunction(), []);
  console.log(value);

  // every time re-render happen, function is being created from scratch
  // const removePerson = (id) => {
  //   const newPeople = people.filter((person) => person.id !== id);
  //   setPeople(newPeople);
  // };

  // useCallback create function only once
  const removePerson = useCallback((id) => {
    console.log(people);
    const newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  }, [people]); // when people changed, function will be re created

  return (
    <section>
      <button
        className='btn'
        onClick={() => setCount(count + 1)}
        style={{ marginBottom: '1rem' }}
      >
        count {count}
      </button>
      <List people={people} removePerson={removePerson} />
    </section>
  );
};
export default LowerState;
