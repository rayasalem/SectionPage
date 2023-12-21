import React from 'react';
import Nav from './Nav';
const Header = () => {
  return (
    <header style={{ backgroundColor: 'blue', padding: '20px', color: '#fff',border:"10px solid white" }}>
      <h1>Header</h1>
      <Nav />
    </header>
  );
};

export default Header;
