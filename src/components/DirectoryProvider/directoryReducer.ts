import { DirectoryReducer, DirectoryTypeEnum } from '../utils/types';
import createNewCards from './middleware/createNewCards';
import reorderCards from './middleware/reorderCards';
import setBaseName from './middleware/setBaseName';

const directoryReducer: DirectoryReducer = (cards, action) => {
  switch (action.type) {
    case DirectoryTypeEnum.GET_IMAGE_HANDLES:
      return createNewCards(action.payload.images);
    case DirectoryTypeEnum.REORDER_CARDS:
      return reorderCards({...action.payload, cards});
    case DirectoryTypeEnum.SET_BASE_NAME:
      return setBaseName(cards, action.payload);
  }
};

export default directoryReducer;
