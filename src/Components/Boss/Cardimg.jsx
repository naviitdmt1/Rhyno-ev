import "./Cardimg.css"
import React from 'react';

const Cardimg = ({ imageUrl, description }) => {
  return (
    <div className="cardimg">
      <div className="card-content">
        <div className="card-image">
          <img src={imageUrl} alt="Card" />
        </div>
        <div className="card-description">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Cardimg;

