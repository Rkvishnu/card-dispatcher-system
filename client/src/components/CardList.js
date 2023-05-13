import React from 'react';
import Card from './Card';

const CardList = ({ cards, handleDelete }) => {
  return (
    <div>
      {cards.map(card => (
        <Card key={card._id} card={card} handleDelete={handleDelete} />
      ))}
    </div>
  );
};

export default CardList;
