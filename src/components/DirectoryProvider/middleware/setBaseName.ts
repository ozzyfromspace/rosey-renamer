import {
  CardData,
  DirectoryState,
  SetBaseNamePayload
} from '../../utils/types';

const setBaseName = (
  state: DirectoryState,
  payload: SetBaseNamePayload
): DirectoryState => {
  let offset = 0;
  const cards = state.cards;

  const newCards: CardData[] = cards.map((card, index) => {
    if (!card.isLocked) {
      card.imageData.currentName = `${payload.baseName}${index - offset + 1}`;
    } else {
      offset--;
    }
    return card;
  });
  return { ...state, cards: newCards };
};

export default setBaseName;
