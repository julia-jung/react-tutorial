import { useState } from "react";

const UserChallenge = () => {
  const [user, setUser] = useState(null);

  const login = () => {
    setUser({ name: 'julia' });
  };
  const logout = () => {
    setUser(null);
  };
  return (
    <div>
      <h2>user challenge</h2>
      {user ? (
        <div>
          <h4>hello, {user.name}</h4>
          <button className='btn' onClick={logout}>logout</button>
        </div>
      ) : (
        <div>
          <h4>Please login</h4>
          <button className='btn' onClick={login}>login</button>
        </div>
      )}
    </div>
  );
};

export default UserChallenge;
