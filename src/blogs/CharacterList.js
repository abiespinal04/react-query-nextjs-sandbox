import React, { useContext } from 'react';
import { ChractersDispatchContext, ChractersStateContext } from './CharactersProvider';

const CharacterList = () => {
  const value = useContext(ChractersStateContext);
  const dispatch = useContext(ChractersDispatchContext);
  console.log('[debug]', value, 'data?.results');
  return (
    <div>
      <ul>
        {value?.data?.results?.map((item) => (
          <p style={{ color: 'white', fontSize: 40 }}>{item.name}</p>
        ))}
      </ul>
    </div>
  );
};

export default CharacterList;
