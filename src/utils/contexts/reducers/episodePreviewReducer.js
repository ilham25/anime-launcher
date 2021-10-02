import {setStorage} from '@utils/';

const episodePreviewReducer = (state, action) => {
  let response = state;
  switch (action.payload.type) {
    case 'INITIAL':
      response = {
        ...state,
        episodePreview: action.payload.episodePreview,
      };
      return response;
    case 'CHANGE_VALUE':
      response = {
        ...state,
        episodePreview: action.payload.episodePreview,
      };
      setStorage(response);
      return response;

    default:
      return state;
  }
};

export default episodePreviewReducer;
