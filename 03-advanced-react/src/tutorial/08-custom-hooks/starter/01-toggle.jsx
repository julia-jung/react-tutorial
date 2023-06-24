import useToggle from './useToggle';

const ToggleExample = () => {
  const [show, toggleShow] = useToggle(false);
  return (
    <div>
      <h4>toggle custom hook</h4>
      <button className='btn' onClick={toggleShow}>
        toggle
      </button>
      {show && <h4>some stuff</h4>}
    </div>
  );
};
export default ToggleExample;
