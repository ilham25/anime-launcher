import {setStorage} from '@utils/';

const animeListReducer = (state, action) => {
  let response = state;
  switch (action.payload.type) {
    case 'INITIAL':
      response = {
        ...state,
        animeList: action.payload.animeList,
      };
      return response;

    case 'CREATE_ANIME':
      response = {
        ...state,
        animeList: [...state.animeList, action.payload.anime],
      };
      setStorage(response);

      return response;

    case 'EDIT_ANIME':
      const editedAnimeList = state.animeList.map(anime =>
        anime.id !== action.payload.anime.id ? anime : action.payload.anime,
      );

      response = {
        ...state,
        animeList: editedAnimeList,
      };
      setStorage(response);

      return response;

    case 'DELETE_ANIME':
      const selectedAnimeIndex = state.animeList.findIndex(
        anime => anime.id === action.payload.anime.id,
      );
      state.animeList.splice(selectedAnimeIndex, 1);

      response = {
        ...state,
        animeList: state.animeList,
      };
      setStorage(response);

      return response;

    case 'CREATE_ANIME_HISTORY':
      const selectedAnime = state.animeList.find(
        anime => anime.id === action.payload.animeId,
      );

      if (!selectedAnime.history.includes(+action.payload.selectedEpisode)) {
        selectedAnime.history.push(action.payload.selectedEpisode);

        const editedAnimeList = state.animeList.map(anime =>
          anime.id !== action.payload.animeId ? anime : selectedAnime,
        );

        response = {
          ...state,
          animeList: editedAnimeList,
        };

        setStorage(response);

        return response;
      }

      return response;

    default:
      return state;
  }
};

export default animeListReducer;
