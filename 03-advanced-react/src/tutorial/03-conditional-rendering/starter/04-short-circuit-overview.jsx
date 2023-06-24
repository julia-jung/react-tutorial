import { useState } from 'react';

const ShortCircuitOverview = () => {
  const [text, setText] = useState('');
  const [name, setName] = useState('julia');
  
  return (
    <div>
      <h2>short circuit overview</h2>
      <h4>{text || 'text is falsy'}</h4>
      <h4>{text && 'text is truthy'}</h4>
      <h4>{name || 'name is falsy'}</h4>
      <h4>{name && 'name is truthy'}</h4>
    </div>
  );
};
export default ShortCircuitOverview;
