import { ReorderCardsProps } from '../../utils/types';

const reorderCards = (props: ReorderCardsProps) => {
  const { destinationIndex, sourceIndex, cards } = props;

  const reorderedCards = [...cards];
  const splicedCard = reorderedCards.splice(sourceIndex, 1)[0];
  reorderedCards.splice(destinationIndex, 0, splicedCard);
  return reorderedCards;
};

export default reorderCards;
