import {setStorage} from '@utils/';

const animeListReducer = (state, action) => {
  switch (action.payload.type) {
    case 'INITIAL':
      return {
        ...state,
        animeList: action.payload.animeList,
      };

    case 'CREATE_ANIME':
      console.log(state);
      setStorage(JSON.stringify([...state.animeList, action.payload.anime]));

      return {
        ...state,
        animeList: [...state.animeList, action.payload.anime],
      };
    case 'EDIT_ANIME':
      const editedAnimeList = state.animeList.map(anime =>
        anime.id !== action.payload.anime.id ? anime : action.payload.anime,
      );
      setStorage(JSON.stringify(editedAnimeList));

      return {
        ...state,
        animeList: editedAnimeList,
      };

    case 'DELETE_ANIME':
      const selectedAnimeIndex = state.animeList.findIndex(
        anime => anime.id === action.payload.anime.id,
      );

      state.animeList.splice(selectedAnimeIndex, 1);
      setStorage(JSON.stringify(state.animeList));

      return {
        ...state,
        animeList: state.animeList,
      };
    default:
      return state;
      break;
  }
};

export default animeListReducer;
