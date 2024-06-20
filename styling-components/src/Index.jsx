import React from 'react';
import ReactDOM from 'react-dom';
import './index.css' 

function Welcome() {
  return (
    <div className="welcome">
      <h1>Welcome to my app!</h1>
    </div>
  );
}

ReactDOM.render(<Welcome />, document.getElementById('root'));
export default Welcome