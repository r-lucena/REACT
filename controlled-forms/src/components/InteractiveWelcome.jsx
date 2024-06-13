import Welcome from '../Welcome';
import { useState } from 'react';

const InteractiveWelcome = () => {
  const [name, setName] = useState('');

  const handleInputChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={handleInputChange}
        placeholder="Name"
      />
      <Welcome name={name} />
    </div>
  );
};

export default InteractiveWelcome;