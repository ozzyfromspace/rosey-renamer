import { CardData } from '../../utils/types';

const createScript = (cards: CardData[], deletedCards: CardData[]) => {
  const renameScript: string = cards.reduce((sh, card) => {
    sh += `mv ${card.imageData.originalName}.${card.imageData.fileExt} ${card.imageData.currentName}.${card.imageData.fileExt}\n`;
    return sh;
  }, '#! /bin/bash\n');
  const script: string = deletedCards.reduce((sh, card) => {
    sh += `rm ${card.imageData.originalName}.${card.imageData.fileExt}\n`;
    return sh;
  }, renameScript);

  return `${script} rm rename.sh\n`;
};

export default createScript;
