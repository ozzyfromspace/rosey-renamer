import React from 'react';
import { DirectoryTypeEnum, ShowDirectoryProps } from '../utils/types';
import showDirectoryPicker from './middleware/showDirectoryPicker';

const ShowDirectory = (props: ShowDirectoryProps) => {
  const { dispatch } = props;

  const openPicker = () => {
    (async () => {
      const images = await showDirectoryPicker();

      if (images === null) return;
      if (images.length === 0) return;

      return dispatch({
        type: DirectoryTypeEnum.GET_IMAGE_HANDLES,
        payload: {
          images,
        },
      });
    })();
  };

  return (
    <button className="showDirectory" onClick={openPicker}>
      SHOW DIRECTORY
    </button>
  );
};

export default ShowDirectory;
