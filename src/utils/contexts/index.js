import React, {createContext, useContext, useReducer} from 'react';
import {setStorage} from '..';

const initialState = {
  animeList: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'INITIAL':
      return {
        ...state,
        animeList: action.animeList,
      };

    case 'CREATE_ANIME':
      setStorage(JSON.stringify([...state.animeList, action.anime]));

      return {
        ...state,
        animeList: [...state.animeList, action.anime],
      };
    case 'EDIT_ANIME':
      const editedAnimeList = state.animeList.map(anime =>
        anime.id !== action.anime.id ? anime : action.anime,
      );
      setStorage(JSON.stringify(editedAnimeList));

      return {
        ...state,
        animeList: editedAnimeList,
      };

    case 'DELETE_ANIME':
      const selectedAnimeIndex = state.animeList.findIndex(
        anime => anime.id === action.anime.id,
      );

      state.animeList.splice(selectedAnimeIndex, 1);
      setStorage(JSON.stringify(state.animeList));

      return {
        ...state,
        animeList: state.animeList,
      };
    default:
      return state;
  }
};

const DefaultContext = createContext();

export const useDefaultContext = () => useContext(DefaultContext);

export const DefaultContextProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <DefaultContext.Provider value={[state, dispatch]}>
      {children}
    </DefaultContext.Provider>
  );
};
