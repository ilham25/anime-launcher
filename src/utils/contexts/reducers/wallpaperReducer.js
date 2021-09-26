import {setStorage} from '@utils/';

const wallpaperReducer = (state, action) => {
  let response = state;
  switch (action.payload.type) {
    case 'INITIAL':
      response = {
        ...state,
        wallpaper: action.payload.wallpaper,
      };
      return response;
    case 'INSERT_WALLPAPER':
      response = {
        ...state,
        wallpaper: action.payload.wallpaper,
      };

      setStorage(response);
      return response;

    default:
      return state;
  }
};

export default wallpaperReducer;
