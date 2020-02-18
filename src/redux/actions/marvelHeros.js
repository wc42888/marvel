import {getAllHeros} from '../../utils/network/api';
import showErrorMessage from '../../utils/network/showErrorMessage';

export const GET_MARVEL_HERO_REQUEST = 'GET_MARVEL_HERO_REQUEST';
export const GET_MARVEL_HERO_SUCCESS = 'GET_MARVEL_HERO_SUCCESS';
export const GET_MARVEL_HERO_FAILURE = 'GET_MARVEL_HERO_FAILURE';

export const getMarvelHero = () => async dispatch => {
  try {
    dispatch({type: GET_MARVEL_HERO_REQUEST});
    const {
      data: {
        data: {results: heroInfo},
      },
    } = await getAllHeros();
    dispatch({
      type: GET_MARVEL_HERO_SUCCESS,
      payload: {
        heroInfo,
      },
    });
  } catch (e) {
    showErrorMessage(e);
    dispatch({type: GET_MARVEL_HERO_FAILURE});
  }
};
