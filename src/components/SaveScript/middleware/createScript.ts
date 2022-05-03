import { CardData } from '../../utils/types';

const createScript = (cards: CardData[], deletedCards: CardData[]) => {
  const renameScript: string = cards.reduce((sh, card) => {
    const source = `${card.imageData.originalName}.${card.imageData.fileExt}`;
    const destination = `'${card.imageData.currentName}.${card.imageData.fileExt}`;
    sh += `mv '${source}' ${destination}'\n`;
    return sh;
  }, '#! /bin/bash\n');
  const script: string = deletedCards.reduce((sh, card) => {
    const file = `${card.imageData.originalName}.${card.imageData.fileExt}`;
    sh += `rm '${file}'\n`;
    return sh;
  }, renameScript);

  return `${script} rm rename.sh\n`;
};

export default createScript;
