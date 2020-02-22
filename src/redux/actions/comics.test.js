import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as api from '../../utils/network/api';
import * as comicsAction from './comics';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

jest.mock('../../utils/network/api', () => ({
  getHeroComics: jest.fn(),
}));

describe('get all comics for one hero actions', () => {
  describe('get comics', () => {
    let store;
    beforeEach(() => {
      store = mockStore();
    });

    it(`should dispatch ${comicsAction.GET_HERO_COMICS_REQUEST}`, () => {
      store.dispatch(comicsAction.getAllHeroComics()).then(() => {
        const expectedAction = {
          type: comicsAction.GET_MARVEL_HERO_REQUEST,
        };

        const action = store.getActions()[0];

        expect(action).toEqual(expectedAction);
      });
    });

    it(`should dispatch ${
      comicsAction.GET_HERO_COMICS_SUCCESS
    } on success`, () => {
      const comics = [{title: 'comic1'}, {title: 'comic2'}, {title: 'comic3'}];

      api.getHeroComics.mockImplementationOnce(() =>
        Promise.resolve({
          data: {data: {results: comics}},
        }),
      );

      return store.dispatch(comicsAction.getAllHeroComics()).then(() => {
        const expectedAction = {
          type: comicsAction.GET_HERO_COMICS_SUCCESS,
          payload: {comics},
        };

        const action = store.getActions()[1];

        expect(action).toEqual(expectedAction);
      });
    });

    it(`should dispatch ${
      comicsAction.GET_HERO_COMICS_FAILURE
    } on fail`, () => {
      api.getHeroComics.mockImplementationOnce(() => Promise.reject({}));

      return store.dispatch(comicsAction.getAllHeroComics()).then(() => {
        const expectedAction = {
          type: comicsAction.GET_HERO_COMICS_FAILURE,
        };

        const action = store.getActions()[1];

        expect(action).toEqual(expectedAction);
      });
    });
  });
});
