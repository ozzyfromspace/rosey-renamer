import { CardProps, ImageData } from "../../utils/types";

const setNewCards = (images: File[]) => {
  const newCards: CardProps[] = [];

  for (const image of images) {
    const imageSrc = URL.createObjectURL(image);
    const newImageData: ImageData = {
      currentName: image.name,
      imageAlt: 'local user image',
      imageSrc,
      originalName: image.name,
    };
    const cardProps: CardProps = {
      imageData: newImageData,
      isEditMode: false,
      isLocked: false,
    };
    newCards.push(cardProps);
  };

  return newCards;
};

export default setNewCards;
