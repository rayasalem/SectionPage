import React from 'react';

const Aside = () => {
  return (
    <aside style={{
      backgroundColor: '#800080',
      color: '#fff',
      border: '10px solid white',
      height: '30vw',
      width: '40vw', // Set width to 40vw
      right: 0, // Align it to the right side
      top: 0, // Align it to the top
      margin: 0, // Remove margins
    }}>
      <h3>Aside</h3>
    </aside>
  );
};

export default Aside;
