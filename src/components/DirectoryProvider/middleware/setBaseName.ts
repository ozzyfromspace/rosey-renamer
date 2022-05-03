import {
  CardData,
  DirectoryState,
  SetBaseNamePayload,
} from '../../utils/types';

const setBaseName = (
  state: DirectoryState,
  payload: SetBaseNamePayload
): DirectoryState => {
  let offset = 0;
  const cards = state.cards;

  const nrCards = state.cards.length;

  const log10 = (nr: number) => Math.log(Math.abs(nr) || 1) / Math.log(10);
  const nrDigits = Math.ceil(log10(nrCards));

  const newCards: CardData[] = cards.map((card, index) => {
    if (!card.isLocked) {
      const initDigit = `${index - offset + 1}`;
      const padding = [...Array(nrDigits - initDigit.length)].fill(0).join('');
      const digit = padding + initDigit;

      card.imageData.currentName = `${payload.baseName}${digit}`;
    } else {
      offset--;
    }
    return card;
  });

  return { ...state, cards: newCards };
};

export default setBaseName;
