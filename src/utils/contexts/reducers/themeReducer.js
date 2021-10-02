import {setStorage} from '@utils/';

const themeReducer = (state, action) => {
  let response = state;
  switch (action.payload.type) {
    case 'INITIAL':
      response = {
        ...state,
        theme: action.payload.theme,
      };
      return response;
    case 'CHANGE_THEME':
      response = {
        ...state,
        theme: action.payload.theme,
      };
      setStorage(response);
      return response;

    default:
      return state;
  }
};

export default themeReducer;
