import React, {createContext, useContext, useReducer} from 'react';

import animeListReducer from './reducers/animeListReducer';
import wallpaperReducer from './reducers/wallpaperReducer';

const initialState = {
  animeList: [],
  wallpaper: '',
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'animeList':
      return animeListReducer(state, action);
    case 'wallpaper':
      return wallpaperReducer(state, action);
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
