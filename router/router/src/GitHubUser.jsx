import { useState, useEffect } from 'react';

const GithubUser = ({ username }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        const userData = await response.json();
        setUser(userData);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchUser();
  }, [username]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{user.name}</h2>
      <img src={user.avatar_url} alt={user.login} />
    </div>
  );
};

export default GithubUser;