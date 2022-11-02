import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { getCharacters } from './api';

const initialState = {
  characters: [],
};

export const characterActions = {
  GET_CHARACTERS: 'GET_CHARACTERS',
};

const charactersReducer = (state, action) => {
  switch (action.type) {
    case characterActions.GET_CHARACTERS:
      return {
        ...state,
        characters: [...state.characters],
      };
    default:
      initialState;
  }
};

export const ChractersStateContext = React.createContext();
export const ChractersDispatchContext = React.createContext();

export const CharactersProvider = ({ children }) => {
  const {data} =useQuery(['characters'], () => getCharacters(), {});
  const [state, dispatch] = React.useReducer(charactersReducer, initialState);
  return (
    <ChractersStateContext.Provider value={{ ...state, data }}>
      <ChractersDispatchContext.Provider value={dispatch}>{children}</ChractersDispatchContext.Provider>
    </ChractersStateContext.Provider>
  );
};
