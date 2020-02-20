import {GET_HERO_COMICS_SUCCESS} from '../actions/comics';

const initalState = [];

const addNewComics = (state, action) => {
  const newComics = action.payload.comics;
  const oldComics = state.filter(
    oldComic => !newComics.some(newComic => newComic.title === oldComic.title),
  );
  return oldComics.concat(newComics);
};

const comicsReducer = (state = initalState, action) => {
  switch (action.type) {
    case GET_HERO_COMICS_SUCCESS:
      return addNewComics(state, action);
    default:
      return state;
  }
};

export default comicsReducer;
