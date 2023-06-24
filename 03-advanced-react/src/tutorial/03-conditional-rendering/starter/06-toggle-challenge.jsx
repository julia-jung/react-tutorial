import { useState } from "react";

const ToggleChallenge = () => {
  const [showAlert, setShowAlert] = useState(false);


  return (
    <div>
      <h2>toggle challenge</h2>
      <button className='btn' onClick={() => setShowAlert(!showAlert)}>toggle</button>
      {showAlert && <Alert />}
    </div>
  );
};

const Alert = () => {
  return <div className='alert alert-danger'>Watch out!</div>
}

export default ToggleChallenge;
