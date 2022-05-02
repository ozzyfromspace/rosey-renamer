import { CardData } from "../../utils/types";

const createScript = (cards: CardData[]) => {
  const script: string = cards.reduce((sh, card) => {
    sh += `mv ${card.imageData.originalName}.${card.imageData.fileExt} ${card.imageData.currentName}.${card.imageData.fileExt}\n`;
    return sh;
  }, "#! /bin/bash\n");

  return script;
}

export default createScript;