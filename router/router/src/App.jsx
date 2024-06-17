import './App.css'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Welcome from './Welcome';
import Counter from './Counter';
import GithubUser from './GitHubUser';
import GitHubUsers from './GitHubForm';



const App = () => {
  return (
    <BrowserRouter>
    <div>
      <nav>
        <Link to="/welcome">Welcome</Link>
        <br />
        <br />
        <Link to="/counter">Counter</Link>
        <br />
        <br />
        <Link to="/githubuser">Github User</Link>
      </nav>
      <Routes>
        <Route path="/welcome" element={<Welcome name="John Doe" />} />
        <Route path="/counter" element={<Counter />} />
        <Route path='/githubuser' element={<GitHubUsers/>}/>
      </Routes>
    </div>
  </BrowserRouter>
  );
};

export default App;