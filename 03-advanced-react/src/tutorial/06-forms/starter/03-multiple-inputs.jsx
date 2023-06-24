import { useState } from "react";

const MultipleInputs = () => {
  const [user, setUser] = useState({ name: '', email: '', password: '' });
  
  const updateUser = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  const submitUser = (e) => {
    e.preventDefault();
    console.log(user);
  }

  return (
    <div>
      <form className='form' onSubmit={submitUser}>
        <h4>Multiple Inputs</h4>
        {/* name */}
        <div className='form-row'>
          <label htmlFor='name' className='form-label'>
            name
          </label>
          <input type='text' className='form-input' id='name' name='name' value={user.name} onChange={updateUser} />
        </div>
        {/* email */}
        <div className='form-row'>
          <label htmlFor='email' className='form-label'>
            Email
          </label>
          <input type='email' className='form-input' id='email' name='email' value={user.email} onChange={updateUser} />
        </div>
        {/* email */}
        <div className='form-row'>
          <label htmlFor='password' className='form-label'>
            Password
          </label>
          <input type='password' className='form-input' id='password' name='password' value={user.password} onChange={updateUser} />
        </div>

        <button type='submit' className='btn btn-block'>
          submit
        </button>
      </form>
    </div>
  );
};
export default MultipleInputs;
