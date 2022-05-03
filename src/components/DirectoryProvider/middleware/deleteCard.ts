import { CardData, DeleteCardPayload, DirectoryState } from '../../utils/types';

const deleteCard = (
  state: DirectoryState,
  payload: DeleteCardPayload
): DirectoryState => {
  let deletedCard: CardData | undefined = undefined;
  const newCardsArray = state.cards.filter((card) => {
    const match = payload.cardId === card.cardId;
    if (match) {
      deletedCard = card;
      return false;
    }
    return true;
  });

  if (deletedCard === undefined) return state;

  return {
    ...state,
    cards: newCardsArray,
    deletedCards: [...state.deletedCards, deletedCard as CardData],
  };
};

export default deleteCard;
