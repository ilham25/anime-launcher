import {setStorage} from '@utils/';

const wallpaperOpacityReducer = (state, action) => {
  switch (action.payload.type) {
    case 'INITIAL':
      return {
        ...state,
        wallpaperOpacity: action.payload.wallpaperOpacity,
      };
    case 'UPDATE_OPACITY':
      const response = {
        ...state,
        wallpaperOpacity: action.payload.wallpaperOpacity,
      };
      setStorage(response);
      return response;

    default:
      return state;
  }
};

export default wallpaperOpacityReducer;
