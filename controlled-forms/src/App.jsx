import Login from './components/Login'
import './App.css'


function App() {
  const handleLogin = (state) => {
    console.log(state);
  };

  return (
    <>
      <Login onLogin={handleLogin}/>
      
    </>
  )
}

export default App
