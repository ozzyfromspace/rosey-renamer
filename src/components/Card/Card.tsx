import React from 'react';
import { useDirectory } from '../DirectoryProvider/DirectoryProvider';
import { CardData, CardProps, DirectoryTypeEnum } from '../utils/types';
import './Card.css';

const Card = (props: CardProps) => {
  const { state, dispatch } = useDirectory();
  const { imageData, cardId, cardIndex } = props;

  const handleMove = () => {
    console.log('clicked!');

    if (!state.isCardSelected) {
      return dispatch({
        type: DirectoryTypeEnum.MOVE_CARD,
        payload: { sourceIndex: cardIndex, destinationIndex: null },
      });
    }

    return dispatch({
      type: DirectoryTypeEnum.MOVE_CARD,
      payload: {
        sourceIndex: state.sourceIndex,
        destinationIndex: cardIndex,
      },
    });
  };

  const img_overlay =
    state.isCardSelected && state.selectedCardId === cardId
      ? 'img_overlay'
      : '';
  const bg_overlay =
    state.isCardSelected && state.selectedCardId === cardId ? 'bg_overlay' : '';
  const text_overlay =
    state.isCardSelected && state.selectedCardId === cardId
      ? 'text_overlay'
      : '';
  // const card_overlay = state.isCardSelected && state.selectedCardId === cardId ? 'overlay' : '';

  const handleDelete = () => {
    if (!state.isCardSelected) {

      return dispatch({type: DirectoryTypeEnum.DELETE_CARD,
      payload: {cardId}});
    } return;
  }

  return (
    <div className={'card ' + bg_overlay}
    >
      <div className="delete">
        <p onClick={handleDelete}>X</p>
      </div>
      <div className={'image'} onClick={handleMove}>
        <img
          src={imageData.imageSrc}
          alt={imageData.imageAlt}
          className={img_overlay}
        />
      </div>
      <div className="editBox">
        <p className={'currentName ' + text_overlay}>{imageData.currentName}</p>
        {/* <div className="buttons">
          <button className="edit">{isEditMode ? 'save' : 'edit'}</button>
          <button className="lock">{isLocked ? 'unlock' : 'lock'}</button>
        </div> */}
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
    fileExt: 'jpeg',
  },
  isEditMode: false,
  isLocked: false,
  cardId: '1234',
};

Card.defaultProps = defaultProps;

export default Card;
