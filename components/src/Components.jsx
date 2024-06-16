import { useState } from 'react';

const Container = ({title, children}) => {
  const [collapsed, setCollapsed] = useState(false);

  const handleTitleClick = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div
      style={{
        backgroundColor: 'white',
        border: '1px solid red',
        padding: 16,
      }}
    >
      <h2 onClick={handleTitleClick}>{title}</h2>
      {collapsed? null : children}
    </div>
  );
};

export default Container;