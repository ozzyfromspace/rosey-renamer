import { CardData, SetBaseNamePayload } from '../../utils/types';

const setBaseName = (cards: CardData[], payload: SetBaseNamePayload) => {
  let offset = 0;

  const newCards: CardData[] = cards.map((card, index) => {
    if (!card.isLocked) {
      card.imageData.currentName = `${payload.baseName}-${index - offset}`;
    } else {
      offset--;
    }
    return card;
  });
  return newCards;
};

export default setBaseName;
