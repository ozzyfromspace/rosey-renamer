import React, { createContext, useContext, useEffect, useReducer } from 'react';
import {
  DirectoryProps,
  DirectoryProviderValue,
  DirectoryState,
} from '../utils/types';
import directoryReducer from './directoryReducer';

const initialState: DirectoryState = {
  cards: [],
  isCardSelected: false,
  selectedCardId: null,
  sourceIndex: null,
  deletedCards: [],
};

const defaultProviderValue: DirectoryProviderValue = {
  state: initialState,
  dispatch: () => {},
};

const DirectoryContext = createContext(defaultProviderValue);

const DirectoryProvider = (props: DirectoryProps) => {
  const { children } = props;
  const [state, dispatch] = useReducer(directoryReducer, initialState);
  const providerValue: DirectoryProviderValue = { state, dispatch };

  useEffect(() => {
    console.log('state - ', state);
  });

  return (
    <DirectoryContext.Provider value={providerValue}>
      {children}
    </DirectoryContext.Provider>
  );
};

export const useDirectory = () => useContext(DirectoryContext);

export default DirectoryProvider;
