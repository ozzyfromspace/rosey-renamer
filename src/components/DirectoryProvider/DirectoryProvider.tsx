import React, { createContext, useContext, useEffect, useReducer } from 'react';
import { DirectoryProps, DirectoryState } from '../utils/types';
import directoryReducer from './directoryReducer';

const defaultValue: DirectoryState = { value: null };

const DirectoryContext = createContext(defaultValue);

const DirectoryProvider = (props: DirectoryProps) => {
  const { children } = props;

  const [state, dispatch] = useReducer(directoryReducer, defaultValue);

  useEffect(() => {}, []);

  return (
    <DirectoryContext.Provider value={defaultValue}>
      {children}
    </DirectoryContext.Provider>
  );
};

export const useDirectory = () => useContext(DirectoryContext);

export default DirectoryProvider;
