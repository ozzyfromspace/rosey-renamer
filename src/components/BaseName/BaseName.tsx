import React, { useState } from 'react';
import { useDirectory } from '../DirectoryProvider/DirectoryProvider';
import { DirectoryTypeEnum } from '../utils/types';

const BaseName = () => {
  const { dispatch } = useDirectory();
  const [baseName, setBaseName] = useState(() => '');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBaseName(() => e.target.value);
  };

  const handleBaseName = () => {
    dispatch({ type: DirectoryTypeEnum.SET_BASE_NAME, payload: { baseName } });
    setBaseName(() => '');
  };

  return (
    <div className='baseName'>
      <input type="text" value={baseName} onChange={handleChange} className='baseNameInput' placeholder='Enter default name...' />
      <button onClick={handleBaseName}>SET BASE NAME</button>
    </div>
  );
};

export default BaseName;
