import { useEffect, useState } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';

const MultipleReturnsFetchData = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  
  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const user = await response.json();
      if (!response.ok) {
        throw Error(user.message);
      }
      setUser(user);
    } catch (err) {
      console.log(err);
      setError(err.message);
    }
    setIsLoading(false);
  };

  useEffect(() => { 
    fetchData();
  }, []);
  
  if (isLoading) {
    return <h2>Loading ...</h2>;
  }
  if (error !== null) {
    return <h2>Error: {error}</h2>
  }
  return (
    <div>
      <img src={user.avatar_url} alt={user.id} />
      <h2>{user.name}</h2>
      <h4>works at: {user.company}</h4>
      <p>{user.bio}</p>
    </div>
  );
};
export default MultipleReturnsFetchData;
