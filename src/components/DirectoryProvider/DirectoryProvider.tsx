import React, { createContext, useContext, useEffect, useReducer } from 'react';
import { DirectoryProps, DirectoryProviderValue } from '../utils/types';
import directoryReducer from './directoryReducer';

const defaultProviderValue: DirectoryProviderValue = {
  cards: [],
  dispatch: () => {},
};

const DirectoryContext = createContext(defaultProviderValue);

const DirectoryProvider = (props: DirectoryProps) => {
  const { children } = props;

  const [cards, dispatch] = useReducer(directoryReducer, []);

  useEffect(() => {}, []);

  const providerValue: DirectoryProviderValue = { cards, dispatch };

  return (
    <DirectoryContext.Provider value={providerValue}>
      {children}
    </DirectoryContext.Provider>
  );
};

export const useDirectory = () => useContext(DirectoryContext);

export default DirectoryProvider;
