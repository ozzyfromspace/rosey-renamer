import { DirectoryReducer, DirectoryTypeEnum } from '../utils/types';
import createNewCards from './middleware/createNewCards';
import deleteCard from "./middleware/deleteCard";
import moveCard from './middleware/moveCard';
import reorderCards from './middleware/reorderCards';
import setBaseName from './middleware/setBaseName';

const directoryReducer: DirectoryReducer = (state, action) => {
  switch (action.type) {
    case DirectoryTypeEnum.GET_IMAGE_HANDLES:
      return createNewCards(state, action.payload.images);
    case DirectoryTypeEnum.REORDER_CARDS:
      return reorderCards(state, action.payload);
    case DirectoryTypeEnum.SET_BASE_NAME:
      return setBaseName(state, action.payload);
    case DirectoryTypeEnum.MOVE_CARD:
      return moveCard(state, action.payload);
    case DirectoryTypeEnum.DELETE_CARD:
      return deleteCard(state, action.payload);
  }
};

export default directoryReducer;
