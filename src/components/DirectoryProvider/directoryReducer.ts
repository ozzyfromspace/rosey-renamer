import { DirectoryReducer, DirectoryTypeEnum } from '../utils/types';
import setNewCards from './middleware/setNewCards';

const directoryReducer: DirectoryReducer = (cards, action) => {
  switch (action.type) {
    case DirectoryTypeEnum.GET_IMAGE_HANDLES:
      return setNewCards(action.payload.images);
  }
};

export default directoryReducer;
