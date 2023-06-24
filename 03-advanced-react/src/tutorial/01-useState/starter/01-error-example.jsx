const ErrorExample = () => {
  let count = 0;
  const increaseCount = () => {
    count++;
  }

  return (
    <div>
      <h2>useState error example</h2>
      <h3>{count}</h3>
      <button onClick={increaseCount}>increase</button>
    </div>
  );
};

export default ErrorExample;
