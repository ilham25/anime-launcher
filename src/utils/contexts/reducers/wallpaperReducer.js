const wallpaperReducer = (state, action) => {
  switch (action.payload.type) {
    case 'INSERT_WALLPAPER':
      return {
        ...state,
      };

    default:
      return state;
  }
};

export default wallpaperReducer;
