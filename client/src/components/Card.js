import React from 'react';

const Card = ({ card }) => {
  return (
    <div className="card">
      <img src={card.imageUrl} alt={card.name} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{card.name}</h5>
        <p className="card-text">{card.description}</p>
        <p className="card-text">
          <small className="text-muted">{`Created by ${card.createdBy}`}</small>
        </p>
      </div>
    </div>
  );
};

export default Card;
