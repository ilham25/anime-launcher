import React, {createContext, useContext, useReducer} from 'react';

import animeListReducer from './reducers/animeListReducer';
import episodePreviewReducer from './reducers/episodePreviewReducer';
import themeReducer from './reducers/themeReducer';
import wallpaperOpacityReducer from './reducers/wallpaperOpacityReducer';
import wallpaperReducer from './reducers/wallpaperReducer';

const initialState = {
  animeList: [],
  wallpaper: '',
  wallpaperOpacity: 0.1,
  theme: 'DARK',
  episodePreview: true,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'animeList':
      return animeListReducer(state, action);
    case 'wallpaper':
      return wallpaperReducer(state, action);
    case 'wallpaperOpacity':
      return wallpaperOpacityReducer(state, action);
    case 'theme':
      return themeReducer(state, action);
    case 'episodePreview':
      return episodePreviewReducer(state, action);
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
