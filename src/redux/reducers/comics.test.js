import comicsReducers from './comics';
import * as comicsAction from '../actions/comics';

describe('comics reducer', () => {
  describe(comicsAction.GET_HERO_COMICS_SUCCESS, () => {
    const {GET_HERO_COMICS_SUCCESS} = comicsAction;
    const comics1 = [{title: 'comic1_1'}, {title: 'comic1_2'}];
    const newStateAfterComics1 = comicsReducers([], {
      type: GET_HERO_COMICS_SUCCESS,
      payload: {comics: comics1},
    });

    it('should add the comics into the list when the list is empty', () => {
      expect(newStateAfterComics1).toEqual(comics1);
    });

    const comics2 = [
      {title: 'comic2_1'},
      {title: 'comic2_2'},
      {title: 'comic2_3'},
    ];

    const newStateAfterComics2 = comicsReducers(newStateAfterComics1, {
      type: GET_HERO_COMICS_SUCCESS,
      payload: {comics: comics2},
    });

    it('should add the new comics into the state when there is no duplicated comics', () => {
      const expectedState = comics1.concat(comics2);
      expect(newStateAfterComics2).toEqual(expectedState);
    });

    const duplicated = [comics1[0], comics1[1], comics2[1]];
    const uniqueComics = [{title: 'comic3_1'}, {title: 'comic2_5'}];

    const comics3 = [...duplicated, ...uniqueComics];

    const newStateAfterComics3 = comicsReducers(newStateAfterComics2, {
      type: GET_HERO_COMICS_SUCCESS,
      payload: {comics: comics3},
    });

    it('should only add the unique comics to the state (without the duplication)', () => {
      const expectedState = comics1.concat(comics2).concat(uniqueComics);
      expect(newStateAfterComics3).toEqual(
        expect.arrayContaining(expectedState),
      );
    });
  });
});
