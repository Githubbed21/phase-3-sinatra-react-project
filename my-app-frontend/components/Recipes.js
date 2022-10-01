import React from 'react';

const Recipes = ({ title, directions, meal, image }) => {
  return (
    <div>
      <h1>{title}</h1>
      <li>{directions}</li>
      <p>{meal}</p>
      <img src={image} alt="😋" />
    </div>
  );
};

export default Recipes;
