import React from 'react';
import Section from './Section';
import Aside from './Aside';

const Article = () => {
  return (
    <div style={{
      display: 'flex',
      width: '100vw', // Setting article width to 60%
    }}>
      <article style={{ 
        backgroundColor: 'blue', 
        color: '#fff', 
        border: '10px solid white', 
        width: '60vw',
      }}>
        <h2>Article</h2>
        <div style={{ backgroundColor: 'orange', padding: '10px', marginBottom: '10px' }}>
          <Section color="orange" />
        </div>
        <div style={{ backgroundColor: 'orange', padding: '10px', marginBottom: '10px' }}>
          <Section color="orange" />
        </div>
        <div style={{ backgroundColor: 'orange', padding: '10px' }}>
          <Section color="orange" />
        </div>
      </article>
      <Aside /> 
    </div>
  );
};

export default Article;
