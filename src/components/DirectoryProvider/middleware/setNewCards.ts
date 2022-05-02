import { v4 as uuidv4 } from 'uuid';
import { CardData, ImageData } from "../../utils/types";

const setNewCards = (images: File[]) => {
  const newCards: CardData[] = [];

  for (let index = 0; index < images.length; index++) {
    const image = images[index];

    const imageSrc = URL.createObjectURL(image);
    const newImageData: ImageData = {
      currentName: image.name,
      imageAlt: 'local user image',
      imageSrc,
      originalName: image.name,
    };
    const CardData: CardData = {
      imageData: newImageData,
      isEditMode: false,
      isLocked: false,
      cardId: uuidv4(),
      currentIndex: index,
    };
    newCards.push(CardData);
  };

  return newCards;
};

export default setNewCards;
