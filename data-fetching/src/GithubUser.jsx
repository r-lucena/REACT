import { useEffect, useState } from "react";

function GithubUser({ username }) {
const [userData, setUserData] = useState({})

  async function fetchUser(user) {
    const getInfo = await fetch(`https://api.github.com/users/${user}`);
    const data = await getInfo.json();
    setUserData(data)
  }
  
  useEffect(() => {
    fetchUser(username)
  })
  
  return <div>Username: {(userData.id)}</div>;
}

export default GithubUser;
// https://github.com/r-lucena
// https://api.github.com/users/${login}
