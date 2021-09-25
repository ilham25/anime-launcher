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
      break;

    case 'UPDATE_LIST':
      setStorage(JSON.stringify([...state.animeList, action.anime]));
      return {
        ...state,
        animeList: [...state.animeList, action.anime],
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
