import React from 'react';
import { CardProps } from '../utils/types';

const Card = (props: CardProps) => {
  const { imageData, isEditMode, isLocked } = props;

  return (
    <div className='card'>
      <div className="image">
        <img src={imageData.imageSrc} alt={imageData.imageAlt} />
      </div>
      <div className="editBox">
        <p className="currentName">{imageData.currentName}</p>
        <button className="edit">{isEditMode ? 'save' : 'edit'}</button>
        <button className="lock">{isLocked ? 'locked' : 'unlocked'}</button>
      </div>
      <div className="mover">MOVE ICON</div>
    </div>
  );
};

const defaultProps: CardProps = {
  imageData: {
    originalName: 'default',
    currentName: 'default',
    imageAlt: '',
    imageSrc: '#',
  },
  isEditMode: false,
  isLocked: false,
  onEditStart: () => {},
  onEditEnd: () => {},
}

Card.defaultProps = defaultProps;

export default Card;
