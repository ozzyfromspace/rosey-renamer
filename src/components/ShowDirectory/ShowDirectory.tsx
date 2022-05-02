import React from 'react';
import { DirectoryTypeEnum, ShowDirectoryProps } from '../utils/types';
import showDirectoryPicker from "./middleware/showDirectoryPicker";

const ShowDirectory = (props: ShowDirectoryProps) => {
  const { dispatch } = props;

  const showDirectoryPopup = async () => {
    const newState = await showDirectoryPicker();

    if (newState === null) return;

    return dispatch({
      type: DirectoryTypeEnum.GET_IMAGE_HANDLES,
      payload: {
        newState: [],
      },
    });
  };

  return (
    <button
      className="showDirectory"
      onClick={() => {
        return showDirectoryPopup();
      }}
    >
      SHOW DIRECTORY
    </button>
  );
};

export default ShowDirectory;
