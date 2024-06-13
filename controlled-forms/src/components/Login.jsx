import { useState } from "react";


const Login = ({onLogin}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleRememberChange = (event) => {
    setRemember(event.target.checked);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Con el método preventDefault() prevenimos el comportamiento predeterminado del elemento form
    onLogin({username,password,remember});
  };

  const isFormValid = username.trim() !== "" && password.trim() !== "";

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input type="text" value={username} onChange={handleUsernameChange} />
      </label>
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </label>
      <label>
        Remember me:
        <input
          type="checkbox"
          checked={remember}
          onChange={handleRememberChange}
        />
      </label>
      <button type="submit" disabled={!isFormValid}>
        Login
      </button>
    </form>
  );
};

export default Login;
