import React from 'react';
import { CardData, CardProps } from '../utils/types';
import './Card.css';

const Card = (props: CardProps) => {
  const { imageData, isEditMode, isLocked } = props;

  return (
    <div className="card">
      <div className="image">
        <img src={imageData.imageSrc} alt={imageData.imageAlt} />
      </div>
      <div className="editBox">
        <p className="currentName">{imageData.currentName}</p>
        <div className="buttons">
          <button className="edit">{isEditMode ? 'save' : 'edit'}</button>
          <button className="lock">{isLocked ? 'unlock' : 'lock'}</button>
        </div>
      </div>
    </div>
  );
};

const defaultProps: CardData = {
  imageData: {
    originalName: 'default',
    currentName: 'default',
    imageAlt: '',
    imageSrc: '#',
  },
  isEditMode: false,
  isLocked: false,
  cardId: '1234',
  currentIndex: 0,
};

Card.defaultProps = defaultProps;

export default Card;
