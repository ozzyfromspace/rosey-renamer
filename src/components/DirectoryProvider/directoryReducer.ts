import { DirectoryReducer, DirectoryTypeEnum } from '../utils/types';
import reorderCards from './middleware/reorderCards';
import setNewCards from './middleware/setNewCards';

const directoryReducer: DirectoryReducer = (cards, action) => {
  switch (action.type) {
    case DirectoryTypeEnum.GET_IMAGE_HANDLES:
      return setNewCards(action.payload.images);
    case DirectoryTypeEnum.REORDER_CARDS:
      return reorderCards({...action.payload, cards});
  }
};

export default directoryReducer;
