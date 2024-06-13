function UncontrolledLogin() {
    function handleSubmit(event) {
      event.preventDefault()
      const formData = new FormData(event.target)
  
      console.log(event);
      console.log(event.target);
      const data = {
        username: formData.get("username"),
        password: formData.get("password"),
        remember: formData.get("remember") === 'on',
      }
      console.log(data);
    }
    return (
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input id="username" name="username" type="text"/>
        <label htmlFor="password">Password</label>
        <input id="password" name="password" type="password"/>
        <label htmlFor="remember">Remember: </label>
        <input id="remember" name="remember" type="checkbox"/>
        <button type="submit">Submit</button>
        <button type="reset">Reset</button>
      </form>
    )
  }
  
  export default UncontrolledLogin