import { useState } from 'react';

const ShortCircuitExamples = () => {
  // falsy
  const [text, setText] = useState('');
  // truthy
  const [name, setName] = useState('susan');
  const [user, setUser] = useState({ name: 'john' });
  const [isEditing, setIsEditing] = useState(false);

  return (<div>
    <h2>short circuit - examples</h2>
    <h2>{text || 'default text'}</h2>
    {!text && (
      <div>
        <h2>whatever return</h2>
        <h2>{name}</h2>
      </div>
    )}
    {user && <SomeComponent name={user.name} />}
    <h2 style={{ margin: '1rem 0' }}>Ternary Operator</h2>
    <button className='btn'>{isEditing ? 'edit' : 'add'}</button>
    {user ? (
      <SomeComponent name={user.name} />
    ) : (
        <div>
          <h2>please login</h2>
      </div>
    )}
  </div>);
};

const SomeComponent = ({ name }) => {
  return (
    <div>
      <h2>hello, {name}</h2>
      <button className='btn'>log out</button>
    </div>
  );
}

export default ShortCircuitExamples;
