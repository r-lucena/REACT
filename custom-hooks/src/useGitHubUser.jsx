import { useState } from "react";

function useGitHubUser(username) {
  const [data, setData] = useState(null);
  const [load, setLoad] = useState(false);
  const [error, setError] = useState(null);

  async function fetchUserData() {
    if (username) {
      try {
        setLoad(true);
        const response = await fetch(
          `https://api.github.com/users/${username}`
        );
        if (response.status != 200) {
          const errorBody = await response.json()
          console.log(errorBody);
          setError(errorBody);
          return 
        }
        const responseJson = await response.json();
        setData(responseJson);
      } catch (error) {
        console.log(error);
      } finally {
        setLoad(false);
      }
    } else {
      console.log("No username");
    }
  }

  return {
    data: data,
    load: load,
    error: error,
    fetchUserData: fetchUserData,
  };
}

export default useGitHubUser;

