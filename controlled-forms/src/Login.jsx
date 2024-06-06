import { useState } from "react"


function Login() {

    const [username, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [remember, setRemember] = useState(false)


    function handleUsernameChange(event) {
        setUserName(event.target.value)
        console.log(username);
    }
    function handlePasswordChange(event) {
        setPassword(event.target.value)
        console.log(password);
    }
    function handleRememberChange(event) {
        setRemember(event.target.checked)
        console.log(remember);
    }
    function handleSubmit(event) {
        event.preventDefault()
        console.log(username, password, remember);
    }

    function resetForm()  {
        console.log("Reseted form");
        setUserName("")
        setPassword("")
        setRemember(false)
    }

  return (
    <form onSubmit={handleSubmit}>
    <label htmlFor="username"  >Username</label>
    <input id="username" onChange={handleUsernameChange} value={username} type="text"/>
    <label htmlFor="password" >Password</label>
    <input id="password"  onChange={handlePasswordChange} value={password} type="password"/>
    <label htmlFor="remember"  >Remember: </label>
    <input id="remember" onChange={handleRememberChange} checked={remember} type="checkbox"/>
    <button type="submit">Submit</button>
    <button type="button" onClick={resetForm}>Reset</button>
</form>
  )
}

export default Login