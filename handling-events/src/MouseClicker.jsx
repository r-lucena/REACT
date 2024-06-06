import React from 'react';

const MouseClicker = () => {
  const handleClickButton = (event) => {
    console.log(event.target.name);
  };

  const handleClickImage = (event) => {
    console.log(event.target.src);
    event.stopPropagation(); 
  };

  return (
    <div>
      <button name="one" onClick={handleClickButton}>
        <img src="image.jpg" onClick={handleClickImage} />
        Click me!
      </button>
    </div>
  );
};

export default MouseClicker;