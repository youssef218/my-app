"use client";
import React from 'react';

const Home = () => {
  const [text, setText] = React.useState('');

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <input type="text" value={text} onChange={handleChange} />
      <p>Entered text: {text}</p>
    </div>
  );
};

export default Home;
