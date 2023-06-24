import { useState } from 'react';
import { data } from '../../../data';

const UserChallenge = () => {
  const [users, setUsers] = useState(data);
  const [name, setName] = useState('');

  const submitForm = (e) => {
    e.preventDefault();
    if (!name) {
      return;
    }
    const lastId = users[users.length - 1].id;
    setUsers([...users, { id: lastId + 1, name, }]);
    setName('');
  }

  const removeUser = (id) => {
    setUsers(users.filter(user => user.id !== id));
  }

  return (
    <div>
      <form className='form' onSubmit={submitForm}>
        <h4>Add User</h4>
        <div className='form-row'>
          <label htmlFor='name' className='form-label'>
            name
          </label>
          <input type='text' className='form-input' id='name' value={name} onChange={(e) => setName(e.target.value)} />
        </div>

        <button type='submit' className='btn btn-block'>
          submit
        </button>
      </form>
      {users.map(user => {
        return <div>
          <h4 key={user.id}>{user.name}</h4>
          <button onClick={() => removeUser(user.id)}>Remove</button>
        </div>
      })}
    </div>
  );
};
export default UserChallenge;
