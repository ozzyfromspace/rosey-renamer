import React from 'react';
import Card from '../Card';
import { useDirectory } from '../DirectoryProvider';

const Cards = () => {
  const { state } = useDirectory();

  return (
    <div className="cards">
      {state.cards.map((cardProps, index) => (
        <Card {...cardProps} cardIndex={index} key={cardProps.cardId} />
      ))}
    </div>
  );
};

export default Cards;
