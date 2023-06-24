import { useState, useReducer } from 'react';
import { data } from '../../../data';
import { CLEAR_LIST, REMOVE_ITEM, RESET_LIST } from './actions';
import reducer from './reducer';

const defaultState = {
  people: data,
};

const ReducerBasics = () => {
  
  const [state, dispatch] = useReducer(reducer, defaultState);
  // const [people, setPeople] = useState(data);

  const removeItem = (id) => {
    // let newPeople = people.filter((person) => person.id !== id);
    // setPeople(newPeople);
    dispatch({ type: REMOVE_ITEM, id });
  };

  const clearList = () => {
    // setPeople([]);
    dispatch({ type: CLEAR_LIST }); // { type: 'CLEAR_LIST' } will be an action in reducer
  }

  const resetList = () => {
    // setPeople(data);
    dispatch({ type: RESET_LIST });
  }

  console.log(state);
  return (
    <div>
      {state.people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className='item'>
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        );
      })}
      {state.people.length > 0 ? (<button
        className='btn'
        style={{ marginTop: '2rem' }}
        onClick={clearList}
      >
        clear items
      </button>) : (<button
        className='btn'
        style={{ marginTop: '2rem' }}
        onClick={resetList}
      >
        reset items
      </button>)}
    </div>
  );
};

export default ReducerBasics;
