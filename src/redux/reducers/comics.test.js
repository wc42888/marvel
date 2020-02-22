import comicsReducers from './comics';
import * as comicsAction from '../actions/comics';

const getRandomNumber = max => Math.floor(Math.random() * max) + 1;

const randomComicsGenerator = (comicName, max) => {
  const comics = [];
  const numberOfComics = getRandomNumber(max);

  for (let i = 0; i < numberOfComics; ++i) {
    comics.push({title: `${comicName}_${i}`});
  }

  return comics;
};

const MAX_COMIC1 = getRandomNumber(10);
const MAX_COMIC2 = getRandomNumber(10);
const MAX_COMIC3 = getRandomNumber(10);

describe('comics reducer', () => {
  describe(comicsAction.GET_HERO_COMICS_SUCCESS, () => {
    const {GET_HERO_COMICS_SUCCESS} = comicsAction;
    const comics1 = randomComicsGenerator('comics1', MAX_COMIC1);
    const newStateAfterComics1 = comicsReducers([], {
      type: GET_HERO_COMICS_SUCCESS,
      payload: {comics: comics1},
    });

    it('should add the comics into the list when the list is empty', () => {
      expect(newStateAfterComics1).toEqual(comics1);
    });

    const comics2 = randomComicsGenerator('comics2', MAX_COMIC2);

    const newStateAfterComics2 = comicsReducers(newStateAfterComics1, {
      type: GET_HERO_COMICS_SUCCESS,
      payload: {comics: comics2},
    });

    it('should add the new comics into the state when there is no duplicated comics', () => {
      const expectedState = comics1.concat(comics2);
      expect(newStateAfterComics2).toEqual(expectedState);
    });

    const duplicated = randomComicsGenerator('comic1', comics1.length).concat(
      randomComicsGenerator('comic2', comics2.length),
    );
    const uniqueComics = randomComicsGenerator('comic3', MAX_COMIC3);

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
