import { DirectoryReducer, DirectoryTypeEnum } from '../utils/types';

const directoryReducer: DirectoryReducer = (cards, action) => {
  switch (action.type) {
    case DirectoryTypeEnum.GET_IMAGE_HANDLES: {
      return [
        {
          imageData: {
            currentName: 'name',
            imageAlt: 'alt',
            imageSrc: '#',
            originalName: 'og',
          },
          isEditMode: false,
          isLocked: false,
        },
      ];
    }
  }
};

export default directoryReducer;
