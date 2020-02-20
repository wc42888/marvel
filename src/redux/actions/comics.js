// TODO: add tests to the actions;
import {getHeroComics} from '../../utils/network/api';
import showErrorMessage from '../../utils/network/showErrorMessage';

export const GET_HERO_COMICS_REQUEST = 'GET_HERO_COMICS_REQUEST';
export const GET_HERO_COMICS_SUCCESS = 'GET_HERO_COMICS_SUCCESS';
export const GET_HERO_COMICS_FAILURE = 'GET_HERO_COMICS_FAILURE';

export const getAllHeroComics = url => async dispatch => {
  try {
    dispatch({type: GET_HERO_COMICS_REQUEST});
    const {
      data: {
        data: {results: comics},
      },
    } = await getHeroComics(url);
    dispatch({
      type: GET_HERO_COMICS_SUCCESS,
      payload: {
        comics,
      },
    });
  } catch (e) {
    showErrorMessage(e);
    dispatch({type: GET_HERO_COMICS_FAILURE});
  }
};
