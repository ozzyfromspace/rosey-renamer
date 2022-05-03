import { v4 as uuidv4 } from 'uuid';
import { CardData, DirectoryState, ImageData } from '../../utils/types';

const createNewCards = (state: DirectoryState, images: File[]): DirectoryState => {
  const newCards: CardData[] = [];

  for (const image of images) {
    const imageSrc = URL.createObjectURL(image);

    const fileParts = image.name.split('.');
    const fileExt = fileParts[fileParts.length - 1].toLowerCase();
    const fileName = fileParts.slice(0, fileParts.length - 1).join('.');

    const newImageData: ImageData = {
      currentName: fileName,
      imageAlt: 'local user image',
      imageSrc,
      originalName: fileName,
      fileExt: fileExt,
    };
    const CardData: CardData = {
      imageData: newImageData,
      isEditMode: false,
      isLocked: false,
      cardId: uuidv4(),
    };
    newCards.push(CardData);
  }

  const sortedCards = newCards.sort((cardData1, cardData2) => {
    const fileNameA = cardData1.imageData.originalName;
    const fileNameB = cardData2.imageData.originalName;
    return fileNameA < fileNameB ? -1 : 1;
  });

  return { ...state, cards: sortedCards };
};

export default createNewCards;
