import { DirectoryState, ReorderCardsPayload } from '../../utils/types';

const reorderCards = (
  state: DirectoryState,
  payload: ReorderCardsPayload
): DirectoryState => {
  // const { destinationIndex, sourceIndex, cards } = props;

  const cards = state.cards;
  const sourceIndex = state.sourceIndex;
  const destinationIndex = payload.destinationIndex;
  const reorderedCards = [...cards];
  const splicedCard = reorderedCards.splice(sourceIndex ?? 0, 1)[0];
  reorderedCards.splice(destinationIndex ?? 0, 0, splicedCard);
  return { ...state, cards: reorderedCards };
};

export default reorderCards;
