import React from 'react';
import { useDirectory } from "../DirectoryProvider/DirectoryProvider";
import { DirectoryTypeEnum } from '../utils/types';
import showDirectoryPicker from './middleware/showDirectoryPicker';

const ShowDirectory = () => {
  const { dispatch } = useDirectory();

  const openPicker = () => {
    (async () => {
      const images = await showDirectoryPicker();

      if (images === null) return;
      if (images.length === 0) return;

      return dispatch({
        type: DirectoryTypeEnum.CREATE_NEW_CARDS,
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
