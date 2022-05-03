import { DirectoryState, MoveCardPayload } from '../../utils/types';

const moveCard = (
  state: DirectoryState,
  payload: MoveCardPayload
): DirectoryState => {
  if (!state.isCardSelected) {
    return {
      ...state,
      sourceIndex: payload.sourceIndex,
      isCardSelected: true,
      selectedCardId: state.cards[payload.sourceIndex ?? 0].cardId,
    };
  }

  const reorderedCards = [...state.cards];
  const extractedCard = reorderedCards.splice(state.sourceIndex ?? 0, 1)[0];
  reorderedCards.splice(payload.destinationIndex ?? 0, 0, extractedCard);

  return {
    ...state,
    cards: reorderedCards,
    sourceIndex: null,
    isCardSelected: false,
    selectedCardId: '',
  };
};

export default moveCard;
