import React from 'react';
import CharacterList from './CharacterList';
import { CharactersProvider } from './CharactersProvider';

const Characters = () => {
  return (
    <CharactersProvider>
      <CharacterList />
    </CharactersProvider>
  );
};

export default Characters;
