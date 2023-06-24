import { useState } from 'react';
const frameworks = ['react', 'angular', 'vue', 'svelte'];
const OtherInputs = () => {
  const [shipping, setShipping] = useState(false);
  const [selectedFramework, setSelectedFramework] = useState(null);

  const sendForm = (e) => {
    e.preventDefault();
    console.log(shipping, selectedFramework);
  }

  return (
    <div>
      <form className='form' onSubmit={sendForm}>
        <h4>Other Inputs</h4>
        {/* name */}
        <div className='form-row' style={{ textAlign: 'left' }}>
          <label htmlFor='shipping'> Free Shipping </label>
          <input type='checkbox' name='shipping' id='shipping' checked={shipping} onChange={(e) => setShipping(e.target.checked)} />
        </div>
        <div className='form-row' style={{ textAlign: 'left' }}>
          <label htmlFor='framework' className='form-label'>
            Framework
          </label>
          {frameworks.map((framework, index) => {
            return <div key={index}>
              <label htmlFor={framework}>{framework}</label>
              <input type='checkbox' name={framework} id={framework} checked={selectedFramework === framework} onChange={(e) => setSelectedFramework(framework)} />
            </div>
              ;
          })}
        </div>
        <button type='submit' className='btn btn-block'>
          submit
        </button>
      </form>
    </div>
  );
};
export default OtherInputs;
