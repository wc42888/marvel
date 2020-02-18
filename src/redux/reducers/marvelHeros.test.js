import marvelHerosReducer from './marvelHeros';
import * as marvelHerosAction from '../actions/marvelHeros';

describe('marvel hero reducer', () => {
  describe(marvelHerosAction.GET_MARVEL_HERO_SUCCESS, () => {
    const heroInfo = [{name: 'A-Bomb'}, {name: 'A.I.M'}];
    const newState = marvelHerosReducer([], {
      type: marvelHerosAction.GET_MARVEL_HERO_SUCCESS,
      payload: {
        heroInfo,
      },
    });

    it('should add the heros into the redux', () => {
      expect(newState).toEqual(heroInfo);
    });
  });
});
