import React from 'react';
import "./Card.css"

const Card = ({ heading, paragraph }) => {
  return (
    <div className="card">
      <h2>{heading}</h2>
      <p>{paragraph}</p>
    </div>
  );
};

export default Card;
