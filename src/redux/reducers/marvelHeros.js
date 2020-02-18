import {GET_MARVEL_HERO_SUCCESS} from '../actions/marvelHeros';

const initalState = [];

const marvelHerosReducer = (state = initalState, action) => {
  switch (action.type) {
    case GET_MARVEL_HERO_SUCCESS:
      return action.payload.heroInfo;
    default:
      return state;
  }
};

export default marvelHerosReducer;
