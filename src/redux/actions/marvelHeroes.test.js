import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as api from '../../utils/network/api';
import * as marvelHerosAction from './marvelHeros';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

jest.mock('../../utils/network/api', () => ({
  getAllHeros: jest.fn(),
}));

describe('marvel heros actions', () => {
  describe('getMarvelHero()', () => {
    let store;
    beforeEach(() => {
      store = mockStore();
    });

    it(`should dispatch ${marvelHerosAction.GET_MARVEL_HERO_REQUEST}`, () => {
      return store.dispatch(marvelHerosAction.getMarvelHero()).then(() => {
        const expectedAction = {
          type: marvelHerosAction.GET_MARVEL_HERO_REQUEST,
        };

        const action = store.getActions()[0];

        expect(action).toEqual(expectedAction);
      });
    });

    it(`should dispatch ${
      marvelHerosAction.GET_MARVEL_HERO_SUCCESS
    } on success`, () => {
      const heroInfo = [{name: 'A-Bomb'}, {name: 'A.I.M'}];
      api.getAllHeros.mockImplementationOnce(() =>
        Promise.resolve({
          data: {data: {results: heroInfo}},
        }),
      );

      return store.dispatch(marvelHerosAction.getMarvelHero()).then(() => {
        const expectedAction = {
          type: marvelHerosAction.GET_MARVEL_HERO_SUCCESS,
          payload: {heroInfo},
        };

        const action = store.getActions()[1];

        expect(action).toEqual(expectedAction);
      });
    });

    it(`should dispatch ${
      marvelHerosAction.GET_MARVEL_HERO_FAILURE
    } on fail`, () => {
      api.getAllHeros.mockImplementationOnce(() => Promise.reject({}));

      return store.dispatch(marvelHerosAction.getMarvelHero()).then(() => {
        const expectedAction = {
          type: marvelHerosAction.GET_MARVEL_HERO_FAILURE,
        };

        const action = store.getActions()[1];

        expect(action).toEqual(expectedAction);
      });
    });
  });
});
